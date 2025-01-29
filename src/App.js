
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Pages/Portfolio';

import Header from './Components/Header';
import Footer from './Components/Footer'; // Import the Footer component




function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>

      <Routes>
        
      </Routes>

    </Router>
  );
}

export default App;
