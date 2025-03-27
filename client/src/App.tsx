import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Proposals from './pages/Proposals';
import Profile from './pages/Profile';
import Data from './pages/Data';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </main>
    </div>
  );
};

export default App; 