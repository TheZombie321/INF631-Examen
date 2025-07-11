// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import { FormProvider } from './context/FormContext';

const App = () => (
  <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
  </FormProvider>
);

export default App;
