import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container text-center">
        <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-neutral-600 max-w-lg mx-auto mb-8">
          Oops! The page you are looking for might have been moved or doesn't exist. 
          Let's get you back to delicious pizza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link to="/menu" className="btn btn-outline">
            <Search className="w-5 h-5 mr-2" />
            Browse Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;