import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, BookOpen, Users, Phone, User, LogOut, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/dashboard', label: 'Dashboard', icon: BookOpen },
    { path: '/mock-interview', label: 'Mock Interview', icon: Users },
    { path: '/test-series', label: 'Test Series', icon: GraduationCap },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-odoo sticky top-0 z-50 border-b border-odoo-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-odoo-gradient rounded-xl flex items-center justify-center shadow-odoo group-hover:shadow-odoo-lg transition-all duration-300">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-odoo-gradient">DevOps Academy</span>
              <p className="text-xs text-odoo-gray-600 -mt-1">Learn. Practice. Excel.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-odoo-primary bg-odoo-light shadow-sm'
                      : 'text-odoo-gray-700 hover:text-odoo-primary hover:bg-odoo-light/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
            
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="flex items-center space-x-2 px-4 py-2 text-odoo-gray-700 hover:text-odoo-primary transition-colors rounded-lg hover:bg-odoo-light/50"
            >
              <User className="w-4 h-4" />
              <span className="font-medium">Login</span>
            </Link>
            <Link
              to="/register"
              className="btn-odoo btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-odoo-gray-700 hover:bg-odoo-light transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-odoo-gray-200 bg-white"
          >
            <div className="py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg mx-2 transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-odoo-primary bg-odoo-light shadow-sm'
                        : 'text-odoo-gray-700 hover:text-odoo-primary hover:bg-odoo-light/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 mt-4 border-t border-odoo-gray-200 space-y-2 px-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-odoo-gray-700 hover:text-odoo-primary hover:bg-odoo-light/50 rounded-lg transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Login</span>
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block mx-2 btn-odoo btn-primary text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;