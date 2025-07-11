
import React from 'react';

const EstudianteItem = ({ estudiante }) => (
  <div className="estudiante">
    <p><strong>Nombre:</strong> {estudiante.nombre}</p>
    <p><strong>Email:</strong> {estudiante.email}</p>
    <p><strong>Carrera:</strong> {estudiante.carrera}</p>
  </div>
);

export default EstudianteItem;
