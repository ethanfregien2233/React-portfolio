import React from 'react';
import About from './components/about';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route 
            exact path="/projects" component={Projects} 
          />
          <Route 
            exact path="/about" component={About}
          />
          <Route 
            exact path="/contact" component={Contact}
          />
          <Route 
            exact path="/resume" component={Resume}
          />
          <Route
          component={About}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;