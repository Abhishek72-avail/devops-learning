import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { techLogos } from '../data/mockData';
import { ArrowRight, Clock, Users, BookOpen, TrendingUp, Award, Target } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Courses', value: '11', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Active Learners', value: '50,420', icon: Users, color: 'bg-green-500' },
    { label: 'Hours of Content', value: '500+', icon: Clock, color: 'bg-purple-500' },
    { label: 'Success Rate', value: '95%', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const quickActions = [
    {
      title: 'Mock Interviews',
      description: 'Practice with real interview scenarios and get personalized feedback',
      link: '/mock-interview',
      icon: Users,
      gradient: 'from-odoo-primary to-odoo-secondary',
      stats: '15+ scenarios'
    },
    {
      title: 'Test Series',
      description: 'Test your knowledge with comprehensive quizzes and assessments',
      link: '/test-series',
      icon: Award,
      gradient: 'from-blue-500 to-cyan-500',
      stats: '200+ questions'
    },
    {
      title: 'Hands-on Projects',
      description: 'Build real-world projects to showcase in your portfolio',
      link: '/projects',
      icon: Target,
      gradient: 'from-green-500 to-emerald-500',
      stats: '25+ projects'
    },
  ];

  return (
    <div className="min-h-screen bg-odoo-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-odoo-gray-900 mb-4">
              DevOps Learning Dashboard
            </h1>
            <p className="text-xl text-odoo-gray-600 max-w-3xl mx-auto">
              Choose a technology to start your learning journey and master the tools that power modern software delivery
            </p>
          </motion.div>
          
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-odoo-gradient rounded-2xl p-8 text-white mb-8 shadow-odoo-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Welcome back! 👋</h2>
                <p className="text-white/90">Continue your DevOps journey and unlock new opportunities</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-white/80">Courses Completed</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-white/80">Overall Progress</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-odoo p-6 hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-odoo-gray-600 font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-odoo-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '75%' }}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-odoo-gray-900 mb-2">Choose Your Learning Path</h2>
            <p className="text-odoo-gray-600">Select a technology to explore comprehensive courses and hands-on projects</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link
                  to={`/course/${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card-odoo-interactive p-8 block text-center"
                >
                  <div className={`w-20 h-20 ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-odoo-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-odoo-gray-600 text-sm mb-4 leading-relaxed">
                    Master {tech.name} with comprehensive tutorials and real-world projects
                  </p>
                  <div className="flex items-center justify-center text-odoo-primary font-medium group-hover:text-odoo-secondary transition-colors">
                    <span>Start Learning</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`bg-gradient-to-br ${action.gradient} rounded-2xl p-8 text-white shadow-odoo-xl hover:shadow-odoo-xl hover:transform hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {action.stats}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{action.description}</p>
                <Link
                  to={action.link}
                  className="inline-flex items-center text-white hover:text-white/80 transition-colors font-medium"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 card-odoo p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-odoo-gray-900">Your Learning Progress</h2>
            <Link to="/profile" className="text-odoo-primary hover:text-odoo-secondary font-medium">
              View Details →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-odoo-light rounded-xl">
              <div className="text-3xl font-bold text-odoo-primary mb-2">7/11</div>
              <div className="text-odoo-gray-600">Courses Completed</div>
            </div>
            <div className="text-center p-6 bg-odoo-light rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">142</div>
              <div className="text-odoo-gray-600">Hours Learned</div>
            </div>
            <div className="text-center p-6 bg-odoo-light rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">23</div>
              <div className="text-odoo-gray-600">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;