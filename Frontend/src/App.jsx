// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextAreaComponent from './components/TextAreaComponent';
import './App.css'; // Import global styles

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="main-content">
          <TextAreaComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;


