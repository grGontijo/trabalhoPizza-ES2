# Backend Implementation Options

## Python Backend (FastAPI)

```python
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datetime import datetime

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins in development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data models
class PizzaBase(BaseModel):
    name: str
    description: str
    price: float
    image: str
    category: str
    toppings: List[str]
    isVegetarian: bool
    isSpicy: bool
    isPopular: bool

class PizzaCreate(PizzaBase):
    pass

class Pizza(PizzaBase):
    id: str
    rating: float
    ratingCount: int

class OrderItemBase(BaseModel):
    pizzaId: str
    quantity: int
    price: float

class OrderCreate(BaseModel):
    userId: str
    items: List[OrderItemBase]
    address: str
    paymentMethod: str

class Order(BaseModel):
    id: str
    userId: str
    items: List[OrderItemBase]
    status: str
    total: float
    createdAt: str
    address: str
    paymentMethod: str

# In-memory database (replace with real database in production)
pizzas_db = [
    {
        "id": "1",
        "name": "Margherita Classic",
        "description": "The classic pizza with fresh tomato sauce, mozzarella, and basil.",
        "price": 12.99,
        "image": "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600",
        "category": "classic",
        "toppings": ["tomato sauce", "mozzarella", "basil"],
        "isVegetarian": True,
        "isSpicy": False,
        "isPopular": True,
        "rating": 4.7,
        "ratingCount": 245
    },
    # Add more pizzas here...
]

orders_db = []

# API routes
@app.get("/api/pizzas", response_model=List[Pizza])
async def get_pizzas():
    return pizzas_db

@app.get("/api/pizzas/{pizza_id}", response_model=Pizza)
async def get_pizza(pizza_id: str):
    for pizza in pizzas_db:
        if pizza["id"] == pizza_id:
            return pizza
    raise HTTPException(status_code=404, detail="Pizza not found")

@app.post("/api/orders", response_model=Order)
async def create_order(order: OrderCreate):
    # Calculate total price
    total = sum(item.price * item.quantity for item in order.items)
    
    # Create new order
    new_order = Order(
        id=str(uuid.uuid4()),
        userId=order.userId,
        items=order.items,
        status="pending",
        total=total,
        createdAt=datetime.now().isoformat(),
        address=order.address,
        paymentMethod=order.paymentMethod
    )
    
    # Save to database
    orders_db.append(new_order.dict())
    
    return new_order

@app.get("/api/orders/user/{user_id}", response_model=List[Order])
async def get_user_orders(user_id: str):
    user_orders = [order for order in orders_db if order["userId"] == user_id]
    return user_orders

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

## Java Backend (Spring Boot)

```java
// Main Application
@SpringBootApplication
public class PizzaDeliveryApplication {
    public static void main(String[] args) {
        SpringApplication.run(PizzaDeliveryApplication.class, args);
    }
}

// Pizza Model
@Entity
public class Pizza {
    @Id
    private String id;
    private String name;
    private String description;
    private double price;
    private String image;
    private String category;
    @ElementCollection
    private List<String> toppings;
    private boolean isVegetarian;
    private boolean isSpicy;
    private boolean isPopular;
    private double rating;
    private int ratingCount;
    
    // Getters and setters
}

// Order Model
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String userId;
    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderItem> items;
    private String status;
    private double total;
    private LocalDateTime createdAt;
    private String address;
    private String paymentMethod;
    
    // Getters and setters
}

@Entity
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String pizzaId;
    private int quantity;
    private double price;
    
    // Getters and setters
}

// Pizza Controller
@RestController
@RequestMapping("/api/pizzas")
public class PizzaController {
    @Autowired
    private PizzaRepository pizzaRepository;
    
    @GetMapping
    public List<Pizza> getAllPizzas() {
        return pizzaRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Pizza> getPizzaById(@PathVariable String id) {
        return pizzaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}

// Order Controller
@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;
    
    @PostMapping
    public Order createOrder(@RequestBody OrderRequest orderRequest) {
        Order order = new Order();
        order.setUserId(orderRequest.getUserId());
        order.setItems(orderRequest.getItems());
        order.setStatus("pending");
        order.setTotal(calculateTotal(orderRequest.getItems()));
        order.setCreatedAt(LocalDateTime.now());
        order.setAddress(orderRequest.getAddress());
        order.setPaymentMethod(orderRequest.getPaymentMethod());
        
        return orderRepository.save(order);
    }
    
    @GetMapping("/user/{userId}")
    public List<Order> getUserOrders(@PathVariable String userId) {
        return orderRepository.findByUserId(userId);
    }
    
    private double calculateTotal(List<OrderItem> items) {
        return items.stream()
                .mapToDouble(item -> item.getPrice() * item.getQuantity())
                .sum();
    }
}
```

## Integration with Frontend

To connect the React frontend with either backend:

1. Update the API calls in the frontend to use the backend endpoints:

```javascript
// src/api/index.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getPizzas = async () => {
  const response = await axios.get(`${API_URL}/pizzas`);
  return response.data;
};

export const getPizzaById = async (id: string) => {
  const response = await axios.get(`${API_URL}/pizzas/${id}`);
  return response.data;
};

export const createOrder = async (orderData: any) => {
  const response = await axios.post(`${API_URL}/orders`, orderData);
  return response.data;
};

export const getUserOrders = async (userId: string) => {
  const response = await axios.get(`${API_URL}/orders/user/${userId}`);
  return response.data;
};
```

2. Then use these functions in the appropriate components to fetch data from the backend.