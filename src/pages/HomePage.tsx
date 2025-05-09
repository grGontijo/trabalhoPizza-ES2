import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PizzaCard from '../components/PizzaCard';
import { pizzas } from '../data/pizzas';
import { ArrowRight, Star, Truck, Clock, Award } from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter popular pizzas
  const popularPizzas = pizzas.filter(pizza => pizza.isPopular).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Popular Pizzas Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Popular Pizzas</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our customers' favorites - these are the pizzas that keep people coming back for more.
              Handcrafted with premium ingredients and baked to perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularPizzas.map((pizza, index) => (
              <PizzaCard key={pizza.id} pizza={pizza} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn btn-outline inline-flex items-center">
              View All Pizzas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We're committed to providing the best pizza experience with high-quality ingredients,
              fast delivery, and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-primary-500" />}
              title="Premium Quality"
              description="We use only the finest ingredients, from our homemade dough to our signature sauce and premium toppings."
            />
            <FeatureCard 
              icon={<Truck className="w-8 h-8 text-primary-500" />}
              title="Fast Delivery"
              description="Our delivery experts ensure your pizza arrives hot and fresh within 30 minutes of placing your order."
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-primary-500" />}
              title="24/7 Service"
              description="Craving pizza at midnight? We've got you covered with our 24/7 delivery service."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers about their
              SliceMaster pizza experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Michael Johnson"
              role="Pizza Enthusiast"
              quote="The best pizza I've had in years! Their crust is perfect and the toppings are always fresh. Fast delivery too!"
              rating={5}
            />
            <TestimonialCard 
              name="Sarah Wilson"
              role="Foodie Blogger"
              quote="As someone who reviews restaurants for a living, I can confidently say SliceMaster has the most authentic Italian pizza in town."
              rating={5}
            />
            <TestimonialCard 
              name="David Thompson"
              role="Regular Customer"
              quote="My family orders from SliceMaster every Friday night. Their variety is amazing and the kids absolutely love it!"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order Your Perfect Pizza?</h2>
          <p className="text-primary-50 max-w-2xl mx-auto mb-8">
            Choose from our wide selection of handcrafted pizzas and get it delivered straight to your door.
            Hot, fresh, and delicious - just a few clicks away!
          </p>
          <Link to="/menu" className="btn bg-white text-primary-500 hover:bg-neutral-100 text-lg px-8 py-3">
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-card flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 p-3 bg-primary-50 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, quote, rating }: { name: string, role: string, quote: string, rating: number }) => {
  return (
    <motion.div 
      className="bg-neutral-50 p-8 rounded-lg shadow-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'}`} 
          />
        ))}
      </div>
      <p className="text-neutral-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-neutral-200 rounded-full mr-4"></div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;