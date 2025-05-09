import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.items.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-neutral-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-neutral-600 mb-8">
              Looks like you haven't added any pizzas to your cart yet.
            </p>
            <button 
              onClick={() => navigate('/menu')}
              className="btn btn-primary"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-card overflow-hidden">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                      Items ({cart.totalItems})
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-neutral-500 hover:text-primary-500 text-sm flex items-center"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Clear Cart
                    </button>
                  </div>
                </div>

                <div className="divide-y">
                  {cart.items.map((item, index) => (
                    <motion.div 
                      key={`${item.pizza.id}-${index}`}
                      className="p-6 flex flex-col sm:flex-row sm:items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="sm:w-20 sm:h-20 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                        <img
                          src={item.pizza.image}
                          alt={item.pizza.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow mb-4 sm:mb-0">
                        <h3 className="font-semibold">{item.pizza.name}</h3>
                        <p className="text-sm text-neutral-500 mb-1">{item.pizza.toppings.join(', ')}</p>
                        <p className="font-medium">${item.pizza.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.pizza.id, Math.max(0, item.quantity - 1))}
                            className="px-3 py-2 hover:bg-neutral-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.pizza.id, item.quantity + 1)}
                            className="px-3 py-2 hover:bg-neutral-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.pizza.id)}
                          className="ml-4 text-neutral-400 hover:text-primary-500"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span>${cart.totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Delivery Fee</span>
                    <span>$2.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Tax</span>
                    <span>${(cart.totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 font-semibold flex justify-between">
                    <span>Total</span>
                    <span>${(cart.totalPrice + 2.99 + cart.totalPrice * 0.08).toFixed(2)}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="btn btn-primary w-full"
                >
                  Proceed to Checkout
                </button>
                
                <button
                  onClick={() => navigate('/menu')}
                  className="w-full text-center mt-4 text-primary-500 hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;