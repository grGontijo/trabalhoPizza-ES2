import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-100 pt-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.span
            className="bg-primary-100 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            #1 Pizza Delivery Service
          </motion.span>
          
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium Pizzas <br />
            <span className="text-primary-500">Delivered Hot</span> & Fresh
          </motion.h1>
          
          <motion.p
            className="text-neutral-700 text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Handcrafted with premium ingredients, our pizzas are made fresh to order 
            and delivered to your doorstep in 30 minutes or less.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/menu" className="btn btn-primary">
              Order Now
            </Link>
            <Link to="/menu" className="btn btn-outline">
              View Menu
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-8 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <div className="font-bold text-2xl">10k+</div>
              <div className="text-neutral-500">Happy Customers</div>
            </div>
            <div>
              <div className="font-bold text-2xl">30min</div>
              <div className="text-neutral-500">Fast Delivery</div>
            </div>
            <div>
              <div className="font-bold text-2xl">20+</div>
              <div className="text-neutral-500">Pizza Varieties</div>
            </div>
          </motion.div>
        </div>
        
        {/* Right image - Pizza */}
        <motion.div 
          className="flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg aspect-square">
            <img 
              src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Delicious Pizza" 
              className="w-full h-full object-cover rounded-full shadow-2xl"
            />
            
            {/* Decoration elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <img 
                src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=120" 
                alt="Pizza Topping" 
                className="w-14 h-14 rounded-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-6 bg-white rounded-full shadow-lg p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img 
                src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=120" 
                alt="Pizza Topping" 
                className="w-14 h-14 rounded-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/3 -left-10 bg-secondary-50 rounded-lg shadow-lg p-3"
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-secondary-500 text-white p-2 rounded-md">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L14.5 9.5L21 10.5L16.5 15L17.5 21L12 18L6.5 21L7.5 15L3 10.5L9.5 9.5L12 4Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Rating</p>
                  <p className="font-bold text-sm">4.9/5</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 -right-12 bg-primary-50 rounded-lg shadow-lg p-3"
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            > 
              <div className="flex items-center gap-2">
                <div className="bg-primary-500 text-white p-2 rounded-md">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">Delivery</p>
                  <p className="font-bold text-sm">30 min</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default Hero;