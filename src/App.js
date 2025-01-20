import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppOne from './components/AppOne';
import AppTwo from './components/AppTwo';
import AppThree from './components/AppThree';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app-one" element={<AppOne />} />
        <Route path="/app-two" element={<AppTwo />} />
        <Route path="/app-three" element={<AppThree />} />
      </Routes>
    </Router>
  );
}

export default App; 