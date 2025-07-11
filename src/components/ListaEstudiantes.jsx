
import React, { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import EstudianteItem from './EstudianteItem';

const ListaEstudiantes = () => {
  const { estudiantes } = useContext(FormContext);

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      {estudiantes.map((est, index) => (
        <EstudianteItem key={index} estudiante={est} />
      ))}
    </div>
  );
};

export default ListaEstudiantes;
