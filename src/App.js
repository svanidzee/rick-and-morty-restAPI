import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Characters, Character } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character/:id" element={<Character />} />
    </Routes>
  );
}

export default App;
