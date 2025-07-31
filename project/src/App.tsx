import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import MockInterview from './pages/MockInterview';
import TestSeries from './pages/TestSeries';
import ProjectList from './pages/ProjectList';
import InterviewQA from './pages/InterviewQA';
import ScenarioQA from './pages/ScenarioQA';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/course/:courseName" element={<CourseDetail />} />
              <Route path="/mock-interview" element={<MockInterview />} />
              <Route path="/test-series" element={<TestSeries />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/interview-qa" element={<InterviewQA />} />
              <Route path="/scenario-qa" element={<ScenarioQA />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;