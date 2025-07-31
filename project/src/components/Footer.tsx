import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-odoo-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-odoo-gradient rounded-xl flex items-center justify-center shadow-odoo">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">DevOps Academy</span>
                <p className="text-sm text-odoo-gray-400">Learn. Practice. Excel.</p>
              </div>
            </div>
            <p className="text-odoo-gray-300 leading-relaxed">
              Master DevOps, DevSecOps, GitOps, and MLOps with our comprehensive learning platform. 
              Build real-world skills through hands-on projects and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-odoo-gray-800 rounded-lg flex items-center justify-center hover:bg-odoo-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-odoo-gray-800 rounded-lg flex items-center justify-center hover:bg-odoo-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-odoo-gray-800 rounded-lg flex items-center justify-center hover:bg-odoo-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </Link></li>
              <li><Link to="/dashboard" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Dashboard
              </Link></li>
              <li><Link to="/mock-interview" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Mock Interview
              </Link></li>
              <li><Link to="/test-series" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Test Series
              </Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Popular Courses</h3>
            <ul className="space-y-3">
              <li><Link to="/course/docker" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Docker Mastery
              </Link></li>
              <li><Link to="/course/kubernetes" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Kubernetes Expert
              </Link></li>
              <li><Link to="/course/jenkins" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Jenkins CI/CD
              </Link></li>
              <li><Link to="/course/terraform" className="text-odoo-gray-300 hover:text-white transition-colors flex items-center group">
                <span className="w-1 h-1 bg-odoo-accent rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Terraform IaC
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-odoo-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-odoo-primary" />
                </div>
                <div>
                  <p className="text-odoo-gray-300 text-sm">Email</p>
                  <p className="text-white">hello@devopsacademy.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-odoo-gray-800 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-odoo-primary" />
                </div>
                <div>
                  <p className="text-odoo-gray-300 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-odoo-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-odoo-primary" />
                </div>
                <div>
                  <p className="text-odoo-gray-300 text-sm">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-odoo-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-odoo-gray-400 text-sm">
              © 2024 DevOps Academy. All rights reserved. Built with ❤️ for the DevOps community.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-odoo-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-odoo-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-odoo-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;