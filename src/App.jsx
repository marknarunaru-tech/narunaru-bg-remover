import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BgRemover from './pages/BgRemover';

function App() {
  return (
    <Router>
      <Routes>
        {/* https://be-dwarf.com/ で表示されるページ */}
        <Route path="/" element={<Home />} />
        
        {/* https://be-dwarf.com/bg-remover で表示されるページ */}
        <Route path="/bg-remover" element={<BgRemover />} />
      </Routes>
    </Router>
  );
}

export default App;