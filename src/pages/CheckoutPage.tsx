import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { MapPin, CreditCard, Check } from 'lucide-react';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'card'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  // If cart is empty, redirect to menu
  if (cart.items.length === 0 && !isOrderPlaced) {
    navigate('/menu');
    return null;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate order processing
      setTimeout(() => {
        setIsProcessing(false);
        setIsOrderPlaced(true);
        clearCart();
      }, 2000);
    }
  };
  
  if (isOrderPlaced) {
    return (
      <div className="pt-24 pb-16">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-card p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-accent-100 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-accent-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Placed!</h1>
            <p className="text-neutral-600 mb-8">
              Thank you for your order! We've received your order and will begin preparing your delicious pizzas right away.
              You'll receive a confirmation email shortly.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => navigate('/')}
                className="btn btn-primary w-full"
              >
                Return to Home
              </button>
              <button 
                onClick={() => navigate('/menu')}
                className="btn btn-outline w-full"
              >
                Order More Pizza
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-card p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`input ${errors.firstName ? 'border-primary-500' : ''}`}
                    />
                    {errors.firstName && <p className="text-primary-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`input ${errors.lastName ? 'border-primary-500' : ''}`}
                    />
                    {errors.lastName && <p className="text-primary-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input ${errors.email ? 'border-primary-500' : ''}`}
                    />
                    {errors.email && <p className="text-primary-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`input ${errors.phone ? 'border-primary-500' : ''}`}
                    />
                    {errors.phone && <p className="text-primary-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>
              
              {/* Delivery Address */}
              <div className="bg-white rounded-lg shadow-card p-6 mb-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-primary-500 mr-2" />
                  <h2 className="text-xl font-semibold">Delivery Address</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                      Street Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`input ${errors.address ? 'border-primary-500' : ''}`}
                    />
                    {errors.address && <p className="text-primary-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                        City*
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`input ${errors.city ? 'border-primary-500' : ''}`}
                      />
                      {errors.city && <p className="text-primary-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-neutral-700 mb-1">
                        ZIP Code*
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className={`input ${errors.zip ? 'border-primary-500' : ''}`}
                      />
                      {errors.zip && <p className="text-primary-500 text-sm mt-1">{errors.zip}</p>}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-card p-6 mb-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-5 h-5 text-primary-500 mr-2" />
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                </div>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <span>Credit / Debit Card</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="max-h-48 overflow-y-auto mb-4">
                {cart.items.map((item, index) => (
                  <div key={index} className="flex items-center py-2 border-b">
                    <div className="w-6 text-center mr-2">{item.quantity}×</div>
                    <div className="flex-grow">
                      <div className="font-medium">{item.pizza.name}</div>
                    </div>
                    <div className="font-medium">${(item.pizza.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
              
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
                onClick={handleSubmit}
                className="btn btn-primary w-full"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Place Order'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;