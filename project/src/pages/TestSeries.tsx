import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Award, ChevronRight, CheckCircle, XCircle } from 'lucide-react';
import { testSeriesData, quizQuestions } from '../data/mockData';

const TestSeries = () => {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const startTest = (testId: number) => {
    setSelectedTest(testId);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...userAnswers, selectedAnswer];
      setUserAnswers(newAnswers);

      if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const resetTest = () => {
    setSelectedTest(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
  };

  if (selectedTest && !showResult) {
    const question = quizQuestions[currentQuestion];
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">5:00</span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <div 
                className="gradient-bg h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">{question.question}</h2>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    selectedAnswer === index
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={resetTest}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Exit Test
              </button>
              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="px-6 py-3 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center"
              >
                {currentQuestion === quizQuestions.length - 1 ? 'Finish Test' : 'Next Question'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Test Completed!</h2>
            <p className="text-xl text-gray-600 mb-8">
              You scored {score} out of {quizQuestions.length} questions
            </p>
            
            <div className="text-6xl font-bold gradient-text mb-8">
              {percentage}%
            </div>
            
            <div className="space-y-4 mb-8">
              {quizQuestions.map((question, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-900">Question {index + 1}</span>
                  <div className="flex items-center">
                    {userAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => startTest(selectedTest!)}
                className="px-6 py-3 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Retake Test
              </button>
              <button
                onClick={resetTest}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Tests
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
            Test Series
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Test your knowledge with our comprehensive quiz series
          </motion.p>
        </div>

        {/* Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testSeriesData.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  test.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  test.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {test.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
              <p className="text-gray-600 mb-4">{test.category}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-sm">{test.questions} Questions</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{test.duration}</span>
                </div>
              </div>

              <button
                onClick={() => startTest(test.id)}
                className="w-full flex items-center justify-center px-6 py-3 gradient-bg text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Test
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Test Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Timed Tests</h3>
              <p className="text-gray-600">Practice under realistic time constraints</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">Get immediate feedback on your performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Detailed Explanations</h3>
              <p className="text-gray-600">Learn from detailed answer explanations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;