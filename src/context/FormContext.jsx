import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (nuevo) => {
    setEstudiantes([...estudiantes, nuevo]);
  };

  return (
    <FormContext.Provider value={{ estudiantes, agregarEstudiante }}>
      {children}
    </FormContext.Provider>
  );
};
