import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Star, CheckCircle, Play } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'Master DevOps, DevSecOps, GitOps, and MLOps with our expertly curated content and hands-on labs',
    },
    {
      icon: Users,
      title: 'Mock Interviews',
      description: 'Practice with real-world scenarios and get interview-ready with personalized feedback',
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Prepare for top industry certifications and advance your career with recognized credentials',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Build in-demand skills and accelerate your career in the rapidly growing DevOps field',
    },
  ];

  const stats = [
    { number: '50,000+', label: 'Students Enrolled' },
    { number: '95%', label: 'Success Rate' },
    { number: '500+', label: 'Hours of Content' },
    { number: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'DevOps Engineer at Google',
      content: 'This platform transformed my career. The hands-on projects and mock interviews prepared me perfectly for my dream job.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Senior SRE at Netflix',
      content: 'The comprehensive curriculum and real-world scenarios helped me transition from development to DevOps seamlessly.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Cloud Architect at AWS',
      content: 'Outstanding content quality and excellent support. I highly recommend this platform to anyone serious about DevOps.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-odoo-gradient text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                  🚀 New: MLOps Certification Track Available
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Master DevOps &
                <span className="block text-odoo-accent">Transform Your Career</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Learn DevOps, DevSecOps, GitOps, and MLOps with hands-on projects, 
                real-world scenarios, and expert mentorship. Join 50,000+ successful graduates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-odoo-primary font-semibold rounded-xl hover:bg-odoo-light transition-all duration-300 shadow-odoo-lg hover:shadow-odoo-xl hover:transform hover:-translate-y-1"
                >
                  Start Learning Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-odoo-primary transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-odoo-xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">{stat.number}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-odoo-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-odoo-gray-900 mb-4">
                Why Choose DevOps Academy?
              </h2>
              <p className="text-xl text-odoo-gray-600 max-w-3xl mx-auto">
                Get hands-on experience with the latest tools and technologies in the DevOps ecosystem
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card-odoo p-8 text-center hover-lift group"
                >
                  <div className="w-16 h-16 bg-odoo-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-odoo-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-odoo-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-odoo-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-odoo-gray-600">
              Join thousands of professionals who have transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-odoo p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-odoo-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-odoo-gradient rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-odoo-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-odoo-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-odoo-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your DevOps Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join thousands of professionals who have advanced their careers with our comprehensive learning platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-odoo-primary font-semibold rounded-xl hover:bg-odoo-light transition-all duration-300 shadow-odoo-lg hover:shadow-odoo-xl hover:transform hover:-translate-y-1"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-odoo-primary transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;