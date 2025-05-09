import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pizzas } from '../data/pizzas';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft, ShoppingCart, Plus, Minus, Star } from 'lucide-react';

const PizzaDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Find the pizza by id
  const pizza = pizzas.find((p) => p.id === id);

  // Find related pizzas (same category)
  const relatedPizzas = pizzas
    .filter((p) => p.category === pizza?.category && p.id !== id)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // If pizza not found, redirect to menu
    if (!pizza && id) {
      navigate('/menu');
    }
  }, [id, navigate, pizza]);

  if (!pizza) {
    return null;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(pizza);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-neutral-600 mb-6 hover:text-primary-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </button>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Pizza Image */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Pizza Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {pizza.isPopular && (
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                Popular Choice
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{pizza.name}</h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                <span className="ml-1 font-medium">{pizza.rating}</span>
              </div>
              <span className="mx-2 text-neutral-300">•</span>
              <span className="text-neutral-600">{pizza.ratingCount} reviews</span>
              <span className="mx-2 text-neutral-300">•</span>
              <span className="capitalize text-neutral-600">{pizza.category}</span>
            </div>

            <p className="text-neutral-700 mb-6">{pizza.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Toppings:</h3>
              <div className="flex flex-wrap gap-2">
                {pizza.toppings.map((topping) => (
                  <span
                    key={topping}
                    className="bg-neutral-100 px-3 py-1 rounded-full text-sm"
                  >
                    {topping}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-2">
              {pizza.isVegetarian && (
                <span className="bg-accent-100 text-accent-700 text-sm px-3 py-1 rounded-full">
                  Vegetarian
                </span>
              )}
              {pizza.isSpicy && (
                <span className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full">
                  Spicy
                </span>
              )}
            </div>

            <div className="border-t border-b py-4 my-6">
              <div className="text-3xl font-bold mb-4">${pizza.price.toFixed(2)}</div>

              <div className="flex items-center">
                <div className="flex items-center border rounded-full overflow-hidden mr-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-neutral-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-neutral-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-1"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Pizzas */}
        {relatedPizzas.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPizzas.map((relatedPizza, index) => (
                <motion.div
                  key={relatedPizza.id}
                  className="pizza-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => navigate(`/pizza/${relatedPizza.id}`)}
                >
                  <div className="mb-3 overflow-hidden rounded-lg">
                    <img
                      src={relatedPizza.image}
                      alt={relatedPizza.name}
                      className="w-full h-36 object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                  <h3 className="font-bold">{relatedPizza.name}</h3>
                  <div className="text-primary-500 font-medium">${relatedPizza.price.toFixed(2)}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PizzaDetailsPage;