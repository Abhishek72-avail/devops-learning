import React from 'react';
import { motion } from 'framer-motion';
import { Code, Clock, Star, ExternalLink } from 'lucide-react';
import { projectData } from '../data/mockData';

const ProjectList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            DevOps Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Build real-world projects to enhance your DevOps skills
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{project.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center px-6 py-3 gradient-bg text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Start Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Kubernetes Cluster Setup</h3>
            <p className="text-gray-600 mb-4">
              Set up a complete Kubernetes cluster from scratch with monitoring and logging
            </p>
            <div className="flex items-center justify-between">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Advanced</span>
              <span className="text-sm text-gray-500">8 hours</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">GitOps with ArgoCD</h3>
            <p className="text-gray-600 mb-4">
              Implement GitOps practices using ArgoCD for continuous deployment
            </p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Intermediate</span>
              <span className="text-sm text-gray-500">6 hours</span>
            </div>
          </motion.div>
        </div>

        {/* Project Guidelines */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Project Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">Build real projects that you can showcase in your portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
              <p className="text-gray-600">Learn industry best practices and standards</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Step-by-Step</h3>
              <p className="text-gray-600">Follow detailed instructions with explanations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;