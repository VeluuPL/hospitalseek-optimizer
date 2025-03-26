
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-primary font-bold text-xl">BestCare</span>
          <span className="text-accent font-medium text-xl">Navigators</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-1 text-accent hover:text-primary transition-colors">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1 text-accent hover:text-primary transition-colors">
            <Info size={18} />
            <span>About Us</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-1 text-accent hover:text-primary transition-colors">
            <Mail size={18} />
            <span>Contact</span>
          </Link>
          
          <Button asChild>
            <Link to="/search" className="ml-4">Find Hospitals</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
