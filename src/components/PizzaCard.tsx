import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Pizza } from '../types';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface PizzaCardProps {
  pizza: Pizza;
  index: number;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, index }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="pizza-card h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="relative mb-3 overflow-hidden rounded-lg group">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-48 object-cover pizza-img"
        />
        
        {pizza.isPopular && (
          <span className="absolute top-2 left-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
            Popular
          </span>
        )}
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Link 
            to={`/pizza/${pizza.id}`}
            className="btn btn-primary py-2"
          >
            View Details
          </Link>
        </div>
      </div>

      <h3 className="font-bold text-lg mb-1">{pizza.name}</h3>
      
      <div className="flex items-center justify-center mb-2">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-secondary-500 fill-secondary-500" />
          <span className="ml-1 text-sm font-medium">{pizza.rating}</span>
        </div>
        <span className="mx-2 text-neutral-300">•</span>
        <span className="text-sm text-neutral-600">{pizza.category}</span>
      </div>
      
      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{pizza.description}</p>
      
      <div className="mt-auto flex items-center justify-between w-full">
        <span className="font-bold text-lg">${pizza.price.toFixed(2)}</span>
        <button 
          onClick={() => addToCart(pizza)}
          className="btn btn-primary py-2 px-3"
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Add
        </button>
      </div>
    </motion.div>
  );
};

export default PizzaCard;