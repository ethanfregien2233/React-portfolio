import React from 'react';
import About from './components/about';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/projects" element={<Projects />} 
          />
          <Route 
            path="/about" element={<About />}
          />
          <Route 
            path="/contact" element={<Contact />}
          />
          <Route 
            path="/resume" element={<Resume />}
          />
          <Route
          component={About}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;