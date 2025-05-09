import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PizzaCard from '../components/PizzaCard';
import { pizzas, categories } from '../data/pizzas';
import { Search } from 'lucide-react';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPizzas, setFilteredPizzas] = useState(pizzas);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Filter pizzas based on category and search term
    const result = pizzas.filter((pizza) => {
      const matchesCategory = selectedCategory === 'all' || pizza.category === selectedCategory;
      const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
    
    setFilteredPizzas(result);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Pizza Menu</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our wide selection of handcrafted pizzas, made with fresh ingredients
            and baked to perfection in our traditional ovens.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for pizzas..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pizza Grid */}
        {filteredPizzas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPizzas.map((pizza, index) => (
              <PizzaCard key={pizza.id} pizza={pizza} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No pizzas found</h3>
            <p className="text-neutral-600">
              Try changing your search terms or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;