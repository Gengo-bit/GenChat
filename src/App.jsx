import React from 'react';
import './App.css';
import ChatRoom from './ChatRoom/ChatRoom';
import SignIn from './SignIn/SignIn';
import LandingPage from './LandingPage/LandingPage';
import HomePage from './HomePage/HomePage';

// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ChatRoom" element={<ChatRoom />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;




