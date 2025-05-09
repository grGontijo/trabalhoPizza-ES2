import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Truck, Users } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SliceMaster</h1>
            <p className="text-primary-50 text-lg">
              Founded in 2010, SliceMaster has been crafting perfect pizzas with passion, quality ingredients, 
              and a commitment to exceptional customer service. Our story is about bringing authentic 
              flavors to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4">
                SliceMaster began in a small kitchen with a big dream: to create the perfect pizza using only the finest ingredients and traditional techniques. Over the years, our passion for crafting exceptional pizzas has never changed, even as we've grown.
              </p>
              <p className="text-neutral-700 mb-4">
                Our founder, Chef Marco, spent years traveling across Italy to learn the art of pizza making from masters in Naples, Rome, and Sicily. He brought these authentic techniques back home and combined them with innovative flavors to create the SliceMaster experience.
              </p>
              <p className="text-neutral-700">
                Today, we're proud to serve communities across the country, but we still make each pizza with the same care and attention to detail as we did on day one. Every SliceMaster pizza tells our story of quality, tradition, and innovation.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/6941028/pexels-photo-6941028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Pizza chef working in kitchen" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-lg"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-100 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              At SliceMaster, we're committed to these core values that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Award className="w-8 h-8 text-primary-500" />}
              title="Quality"
              description="We never compromise on the quality of our ingredients, sourcing the freshest and finest components for every pizza we make."
            />
            <ValueCard 
              icon={<Users className="w-8 h-8 text-primary-500" />}
              title="Community"
              description="We're committed to serving our local communities and building relationships with our customers and employees."
            />
            <ValueCard 
              icon={<Truck className="w-8 h-8 text-primary-500" />}
              title="Reliability"
              description="When you order from SliceMaster, you can count on prompt delivery and consistent excellence in every pizza."
            />
            <ValueCard 
              icon={<Clock className="w-8 h-8 text-primary-500" />}
              title="Innovation"
              description="While we respect tradition, we're always exploring new flavors and techniques to keep our menu exciting and fresh."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The talented people behind SliceMaster's success, passionate about bringing you the perfect pizza experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="Marco Romano"
              role="Founder & Head Chef"
              image="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TeamMember 
              name="Sophia Garcia"
              role="Executive Chef"
              image="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <TeamMember 
              name="Daniel Lewis"
              role="Operations Manager"
              image="https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Taste The SliceMaster Difference</h2>
          <p className="text-secondary-50 max-w-2xl mx-auto mb-8">
            Ready to experience our authentic, handcrafted pizzas? Order now and discover why our customers keep coming back for more.
          </p>
          <a href="/menu" className="btn bg-white text-secondary-500 hover:bg-neutral-100 text-lg px-8 py-3">
            View Our Menu
          </a>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-card flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 p-3 bg-primary-50 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const TeamMember = ({ name, role, image }: { name: string, role: string, image: string }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-card"
      whileHover={{ y: -5 }}
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="h-72 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-neutral-600">{role}</p>
      </div>
    </motion.div>
  );
};

export default AboutPage;