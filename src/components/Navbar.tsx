import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Pizza as PizzaIcon, Menu, X, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 navbar shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <PizzaIcon className="w-8 h-8 text-primary-500" />
          <span className="text-xl font-bold">SliceMaster</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/menu" label="Menu" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/account"
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <User className="w-5 h-5" />
          </Link>
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cart.totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.totalItems}
              </span>
            )}
          </Link>
          <Link to="/menu" className="btn btn-primary">
            Order Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cart.totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 pb-6 px-4 md:hidden flex flex-col">
          <nav className="flex flex-col gap-4 mb-8">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/menu" label="Menu" />
            <MobileNavLink to="/about" label="About" />
            <MobileNavLink to="/contact" label="Contact" />
            <MobileNavLink to="/account" label="My Account" />
          </nav>
          <Link to="/menu" className="btn btn-primary mt-auto">
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
};

// Desktop NavLink component
const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative font-medium px-1 py-2 transition-colors ${
        isActive ? 'text-primary-500' : 'text-neutral-700 hover:text-primary-500'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded-full" />
      )}
    </Link>
  );
};


const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-lg font-medium py-3 border-b border-neutral-100 ${
        isActive ? 'text-primary-500' : 'text-neutral-800'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;