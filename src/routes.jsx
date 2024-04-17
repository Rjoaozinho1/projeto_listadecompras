import { Routes, Route } from 'react-router-dom';
import Lista from './home/App.jsx';
import React from 'react';

function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Lista />} />
    </Routes>
  );
}

export default MainRoutes;
