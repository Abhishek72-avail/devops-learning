import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { scenarioQuestions } from '../data/mockData';

const ScenarioQA = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const additionalScenarios = [
    {
      id: 3,
      scenario: 'A microservice is consuming too much memory and causing system slowdowns',
      question: 'How would you identify and resolve this performance issue?',
      answer: 'Steps: 1) Monitor memory usage with tools like Prometheus/Grafana, 2) Analyze application logs for memory leaks, 3) Check resource limits and requests, 4) Profile the application code, 5) Implement horizontal pod autoscaling if needed, 6) Optimize code or add resource constraints',
      category: 'Performance',
      difficulty: 'Advanced',
    },
    {
      id: 4,
      scenario: 'Your CI/CD pipeline is failing intermittently without clear error messages',
      question: 'What debugging approach would you take?',
      answer: 'Approach: 1) Enable verbose logging in pipeline, 2) Check for resource availability issues, 3) Review recent changes to pipeline or dependencies, 4) Test pipeline components individually, 5) Implement retry mechanisms for flaky tests, 6) Monitor infrastructure metrics during pipeline runs',
      category: 'CI/CD',
      difficulty: 'Intermediate',
    },
  ];

  const allScenarios = [...scenarioQuestions, ...additionalScenarios];

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
            Scenario-Based Q&A
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Practice with real-world DevOps scenarios and troubleshooting situations
          </motion.p>
        </div>

        {/* Scenarios List */}
        <div className="space-y-6">
          {allScenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleCard(scenario.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center mr-3">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          scenario.difficulty === 'Basic' ? 'bg-green-100 text-green-800' :
                          scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {scenario.difficulty}
                        </span>
                        <span className="text-sm text-gray-500">{scenario.category}</span>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-orange-400 mr-2" />
                        <h4 className="font-semibold text-orange-900">Scenario:</h4>
                      </div>
                      <p className="text-orange-800 mt-1">{scenario.scenario}</p>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900">
                      {scenario.question}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {expandedCard === scenario.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedCard === scenario.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="bg-green-50 border-l-4 border-green-400 p-4">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <h4 className="font-semibold text-green-900">Solution:</h4>
                    </div>
                    <p className="text-green-800 leading-relaxed">{scenario.answer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Practice Tips */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tips for Scenario-Based Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Understand the Problem</h3>
              <p className="text-gray-600">Take time to fully understand the scenario before jumping to solutions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Structure Your Answer</h3>
              <p className="text-gray-600">Break down your solution into logical, step-by-step processes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consider Best Practices</h3>
              <p className="text-gray-600">Include monitoring, logging, and prevention strategies in your solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioQA;