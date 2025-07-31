import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Clock, BookOpen, MessageSquare, Code, FileText, ArrowLeft } from 'lucide-react';
import { videoData, projectData, interviewQuestions, scenarioQuestions } from '../data/mockData';

const CourseDetail = () => {
  const { courseName } = useParams<{ courseName: string }>();
  const [activeTab, setActiveTab] = useState('videos');

  const tabs = [
    { id: 'videos', label: 'Videos', icon: Play },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'interview', label: 'Interview Q&A', icon: MessageSquare },
    { id: 'scenarios', label: 'Scenarios', icon: FileText },
  ];

  const renderVideoContent = () => {
    const videos = videoData[courseName as keyof typeof videoData] || [];
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
          >
            <div className="aspect-video bg-gray-900 relative">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">{video.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderProjectContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectData.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 card-hover"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
              project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {project.difficulty}
            </span>
            <span className="text-sm text-gray-500">{project.duration}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderInterviewContent = () => (
    <div className="space-y-6">
      {interviewQuestions.map((question, index) => (
        <motion.div
          key={question.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              question.difficulty === 'Basic' ? 'bg-green-100 text-green-800' :
              question.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {question.difficulty}
            </span>
            <span className="text-sm text-gray-500">{question.category}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{question.question}</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">{question.answer}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderScenarioContent = () => (
    <div className="space-y-6">
      {scenarioQuestions.map((scenario, index) => (
        <motion.div
          key={scenario.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              scenario.difficulty === 'Basic' ? 'bg-green-100 text-green-800' :
              scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {scenario.difficulty}
            </span>
            <span className="text-sm text-gray-500">{scenario.category}</span>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-blue-900 mb-2">Scenario:</h4>
            <p className="text-blue-800">{scenario.scenario}</p>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">{scenario.question}</h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">{scenario.answer}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'videos':
        return renderVideoContent();
      case 'projects':
        return renderProjectContent();
      case 'interview':
        return renderInterviewContent();
      case 'scenarios':
        return renderScenarioContent();
      default:
        return renderVideoContent();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link
              to="/dashboard"
              className="mr-4 p-2 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 capitalize">
                {courseName?.replace('-', ' ')} Course
              </h1>
              <p className="text-gray-600 mt-2">
                Master {courseName} with comprehensive learning materials
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;