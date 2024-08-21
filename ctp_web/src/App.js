import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Survey from './Survey';
import Discussion from './Discussion';
import AboutUs from './AboutUs';
import Home from './Home'; // Make sure you create a Home component or adjust the import as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* Redirect to home if route is not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
