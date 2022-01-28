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
            path="/projects" component={Projects} 
          />
          <Route 
            path="/about" component={About}
          />
          <Route 
            path="/contact" component={Contact}
          />
          <Route 
            path="/resume" component={Resume}
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