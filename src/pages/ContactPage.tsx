import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-primary-50 text-lg">
              Have questions, suggestions, or just want to say hello? We'd love to hear from you!
              Our team is ready to assist you with anything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-neutral-700 mb-8">
                Whether you have a question about our menu, delivery areas, business hours, or anything else, 
                we're here to help. Reach out to us using any of the methods below.
              </p>

              <div className="space-y-6 mb-8">
                <ContactInfoItem 
                  icon={<MapPin className="w-6 h-6 text-primary-500" />}
                  title="Our Location"
                  details={[
                    "123 Pizza Street, Flavor Town, NY 10001",
                    "United States"
                  ]}
                />
                <ContactInfoItem 
                  icon={<Phone className="w-6 h-6 text-primary-500" />}
                  title="Phone Numbers"
                  details={[
                    "(555) 123-4567 (Customer Support)",
                    "(555) 765-4321 (Orders & Delivery)"
                  ]}
                />
                <ContactInfoItem 
                  icon={<Mail className="w-6 h-6 text-primary-500" />}
                  title="Email Us"
                  details={[
                    "info@slicemaster.com",
                    "support@slicemaster.com"
                  ]}
                />
                <ContactInfoItem 
                  icon={<Clock className="w-6 h-6 text-primary-500" />}
                  title="Business Hours"
                  details={[
                    "Monday - Friday: 11:00 - 22:00",
                    "Saturday - Sunday: 12:00 - 23:00"
                  ]}
                />
              </div>

              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Corporate Inquiries</h3>
                <p className="text-neutral-700">
                  For franchise opportunities, partnerships, or media inquiries, please contact our corporate team at 
                  <a href="mailto:corporate@slicemaster.com" className="text-primary-500 ml-1">corporate@slicemaster.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent-100 rounded-full flex items-center justify-center">
                      <Send className="w-8 h-8 text-accent-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-neutral-600 mb-4">
                      Thank you for reaching out! We've received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input ${errors.name ? 'border-primary-500' : ''}`}
                        />
                        {errors.name && <p className="text-primary-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Email*
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
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                          Subject*
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`input ${errors.subject ? 'border-primary-500' : ''}`}
                        >
                          <option value="">Select a subject</option>
                          <option value="order">Order Inquiry</option>
                          <option value="delivery">Delivery Issue</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.subject && <p className="text-primary-500 text-sm mt-1">{errors.subject}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`input resize-none ${errors.message ? 'border-primary-500' : ''}`}
                        ></textarea>
                        {errors.message && <p className="text-primary-500 text-sm mt-1">{errors.message}</p>}
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Located in the heart of Flavor Town, we're easy to find. Come visit us for dine-in or pick up your order.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-card overflow-hidden">
            {/* Placeholder for a map */}
            <div className="h-96 bg-neutral-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">SliceMaster Pizza</h3>
                <p className="text-neutral-600">123 Pizza Street, Flavor Town, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Quick answers to common questions our customers ask. If you don't find what you're looking for, feel free to contact us directly.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FaqItem
                question="What are your delivery areas?"
                answer="We currently deliver within a 5-mile radius of our location. Enter your address on our ordering page to check if you're in our delivery zone."
              />
              <FaqItem
                question="How long does delivery usually take?"
                answer="Our average delivery time is 30 minutes or less, depending on your location and current order volume. You'll receive an estimated delivery time when you place your order."
              />
              <FaqItem
                question="Do you offer catering services?"
                answer="Yes! We offer catering for events of all sizes. Please contact us at least 48 hours in advance to discuss your requirements and place a catering order."
              />
              <FaqItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards, cash, and mobile payment options like Apple Pay and Google Pay for both online and in-store orders."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, details }: { icon: React.ReactNode, title: string, details: string[] }) => {
  return (
    <div className="flex">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <div className="text-neutral-600">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      
      {isOpen && (
        <div className="p-4 pt-0 text-neutral-700 border-t">
          {answer}
        </div>
      )}
    </div>
  );
};

export default ContactPage;