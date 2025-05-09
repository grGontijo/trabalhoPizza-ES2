import { Pizza } from '../types';

export const pizzas: Pizza[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    description: 'The classic pizza with fresh tomato sauce, mozzarella, and basil.',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'classic',
    toppings: ['tomato sauce', 'mozzarella', 'basil'],
    isVegetarian: true,
    isSpicy: false,
    isPopular: true,
    rating: 4.7,
    ratingCount: 245
  },
  {
    id: '2',
    name: 'Pepperoni Paradise',
    description: 'Topped with spicy pepperoni, mozzarella, and our signature tomato sauce.',
    price: 14.99,
    image: 'https://images.pexels.com/photos/4394612/pexels-photo-4394612.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'meat',
    toppings: ['tomato sauce', 'mozzarella', 'pepperoni'],
    isVegetarian: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.8,
    ratingCount: 320
  },
  {
    id: '3',
    name: 'Veggie Supreme',
    description: 'Loaded with bell peppers, mushrooms, onions, olives, and fresh tomatoes.',
    price: 13.99,
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'vegetarian',
    toppings: ['tomato sauce', 'mozzarella', 'bell peppers', 'mushrooms', 'onions', 'olives', 'tomatoes'],
    isVegetarian: true,
    isSpicy: false,
    isPopular: false,
    rating: 4.5,
    ratingCount: 189
  },
  {
    id: '4',
    name: 'Meat Lovers',
    description: 'For serious meat lovers - pepperoni, sausage, bacon, and ham.',
    price: 16.99,
    image: 'https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'meat',
    toppings: ['tomato sauce', 'mozzarella', 'pepperoni', 'sausage', 'bacon', 'ham'],
    isVegetarian: false,
    isSpicy: false,
    isPopular: true,
    rating: 4.9,
    ratingCount: 276
  },
  {
    id: '5',
    name: 'Hawaiian Bliss',
    description: 'Sweet and savory with ham, pineapple, and extra mozzarella.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/7813577/pexels-photo-7813577.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'specialty',
    toppings: ['tomato sauce', 'mozzarella', 'ham', 'pineapple'],
    isVegetarian: false,
    isSpicy: false,
    isPopular: false,
    rating: 4.3,
    ratingCount: 215
  },
  {
    id: '6',
    name: 'Buffalo Chicken',
    description: 'Spicy buffalo chicken, ranch, and mozzarella with a blue cheese drizzle.',
    price: 17.99,
    image: 'https://images.pexels.com/photos/1146754/pexels-photo-1146754.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'specialty',
    toppings: ['ranch sauce', 'mozzarella', 'buffalo chicken', 'blue cheese drizzle'],
    isVegetarian: false,
    isSpicy: true,
    isPopular: true,
    rating: 4.6,
    ratingCount: 198
  },
  {
    id: '7',
    name: 'Mediterranean Delight',
    description: 'Feta cheese, spinach, olives, tomatoes, and artichoke hearts.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'vegetarian',
    toppings: ['olive oil base', 'mozzarella', 'feta', 'spinach', 'olives', 'tomatoes', 'artichoke'],
    isVegetarian: true,
    isSpicy: false,
    isPopular: false,
    rating: 4.4,
    ratingCount: 156
  },
  {
    id: '8',
    name: 'BBQ Chicken',
    description: 'Tangy BBQ sauce, chicken, red onions, and cilantro.',
    price: 16.99,
    image: 'https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'specialty',
    toppings: ['BBQ sauce', 'mozzarella', 'chicken', 'red onions', 'cilantro'],
    isVegetarian: false,
    isSpicy: false,
    isPopular: true,
    rating: 4.7,
    ratingCount: 234
  }
];

export const categories = [
  {
    id: 'all',
    name: 'All Pizzas',
    description: 'Our complete pizza selection'
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional pizzas with time-honored recipes'
  },
  {
    id: 'meat',
    name: 'Meat Lovers',
    description: 'Hearty options for meat enthusiasts'
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian',
    description: 'Delicious meat-free options'
  },
  {
    id: 'specialty',
    name: 'Specialty',
    description: 'Unique creations from our master chefs'
  }
];