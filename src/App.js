import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ErrorBoundary } from './components/Layout';
import { Characters } from './pages/index';

const Character = lazy(() =>
  import(/* webpackChunkName: "Character" */ './pages/Character/Character'),
);
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
