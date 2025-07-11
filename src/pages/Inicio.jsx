// src/pages/Inicio.jsx
import React from 'react';
import Formulario from '../components/Formulario';
import ListaEstudiantes from '../components/ListaEstudiantes';

const Inicio = () => {
  return (
    <div>
      <h1>Registro de Estudiantes</h1>
      <div className="container">
        <div className="form-card">
          <Formulario />
        </div>
        <div className="list-card">
          <ListaEstudiantes />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
