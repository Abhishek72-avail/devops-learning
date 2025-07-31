import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Lock, Eye, EyeOff, BookOpen, CheckCircle, Star, ArrowRight } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const benefits = [
    'Access to 500+ hours of premium content',
    'Hands-on projects and real-world scenarios',
    'Mock interviews with personalized feedback',
    'Industry-recognized certifications',
    '24/7 community support and mentorship'
  ];

  return (
    <div className="min-h-screen bg-odoo-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Benefits */}
        <div className="hidden lg:flex bg-odoo-gradient text-white p-12 items-center">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">DevOps Academy</h1>
                  <p className="text-white/80 text-sm">Learn. Practice. Excel.</p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">
                Welcome Back to Your DevOps Journey
              </h2>
              
              <p className="text-white/90 mb-8 leading-relaxed">
                Continue mastering the tools and practices that power modern software delivery. 
                Join thousands of professionals advancing their careers.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 bg-white/20 rounded-full border-2 border-white/30"></div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80">Trusted by 50,000+ learners</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            <div className="card-odoo p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-odoo-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-odoo-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-odoo-gray-900">Welcome Back</h2>
                <p className="mt-2 text-odoo-gray-600">Sign in to continue your learning journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-odoo-gray-700 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-odoo-gray-400" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="input-odoo pl-10"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-odoo-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-odoo-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="input-odoo pl-10 pr-10"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-odoo-primary transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-odoo-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-odoo-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-odoo-primary focus:ring-odoo-primary border-odoo-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-odoo-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-odoo-primary hover:text-odoo-secondary transition-colors">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-odoo btn-primary disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="loading-spinner mr-2"></div>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Sign In
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-sm text-odoo-gray-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-odoo-primary hover:text-odoo-secondary font-medium transition-colors">
                    Sign up here
                  </Link>
                </p>
              </div>

              {/* Social Login Options */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-odoo-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-odoo-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-odoo-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-odoo-gray-500 hover:bg-odoo-gray-50 transition-colors">
                    <span>Google</span>
                  </button>
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-odoo-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-odoo-gray-500 hover:bg-odoo-gray-50 transition-colors">
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;