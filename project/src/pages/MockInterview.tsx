import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Users, Award, CheckCircle } from 'lucide-react';
import { mockInterviewData } from '../data/mockData';

const MockInterview = () => {
  const [selectedInterview, setSelectedInterview] = useState<number | null>(null);

  const startInterview = (id: number) => {
    setSelectedInterview(id);
    // Simulate interview start
    setTimeout(() => {
      alert('Mock interview completed! You scored 85/100');
      setSelectedInterview(null);
    }, 3000);
  };

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
            Mock Interview Practice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Practice with real interview scenarios and get ready for your dream job
          </motion.p>
        </div>

        {/* Interview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockInterviewData.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {interview.title.includes('Junior') ? 'Junior' : 'Senior'} Level
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{interview.title}</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>{interview.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>{interview.questions} Questions</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {interview.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => startInterview(interview.id)}
                disabled={selectedInterview === interview.id}
                className="w-full flex items-center justify-center px-6 py-3 gradient-bg text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {selectedInterview === interview.id ? (
                  <>
                    <div className="loading-spinner mr-2"></div>
                    Interview in Progress...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Start Interview
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Mock Interview Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Interview Experience</h3>
              <p className="text-gray-600">Practice with questions from real DevOps interviews</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Feedback</h3>
              <p className="text-gray-600">Get immediate feedback on your performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Timed Practice</h3>
              <p className="text-gray-600">Practice under realistic time constraints</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;