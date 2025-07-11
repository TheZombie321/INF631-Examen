
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import DetalleEstudiante from './pages/DetalleEstudiante';
import { FormProvider } from './context/FormContext';

const App = () => (
  <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalle/:id" element={<DetalleEstudiante />} />
      </Routes>
    </Router>
  </FormProvider>
);

export default App;
