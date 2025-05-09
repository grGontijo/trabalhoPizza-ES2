import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza as PizzaIcon, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PizzaIcon className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold">SliceMaster</span>
            </Link>
            <p className="text-neutral-400 mb-6">
              Crafting the perfect pizza is our passion. Each slice tells our story of quality and tradition.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/menu" label="Our Menu" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/faq" label="FAQs" />
              <FooterLink to="/blog" label="Blog" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                <span className="text-neutral-300">123 Pizza Street, Flavor Town, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" />
                <span className="text-neutral-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <span className="text-neutral-300">hello@slicemaster.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-neutral-400">Monday - Friday</span>
                <span className="text-neutral-300">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-400">Saturday</span>
                <span className="text-neutral-300">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-400">Sunday</span>
                <span className="text-neutral-300">12:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>&copy; {currentYear} SliceMaster Pizza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="text-neutral-300 hover:text-primary-400 transition-colors">
        {label}
      </Link>
    </li>
  );
};

export default Footer;