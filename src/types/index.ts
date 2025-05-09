export interface Pizza {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    toppings: string[];
    isVegetarian: boolean;
    isSpicy: boolean;
    isPopular: boolean;
    rating: number;
    ratingCount: number;
  }
  
  
  export interface Category {
    id: string;
    name: string;
    description: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
  }
  
  export interface Order {
    id: string;
    userId: string;
    items: {
      pizzaId: string;
      quantity: number;
      price: number;
    }[];
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
    total: number;
    createdAt: string;
    address: string;
    paymentMethod: string;
  }