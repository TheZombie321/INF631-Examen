
import React, { useState, useContext } from 'react';
import { FormContext } from '../context/FormContext';

const Formulario = () => {
  const { agregarEstudiante } = useContext(FormContext);
  const [formData, setFormData] = useState({ nombre: '', email: '', carrera: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.email && formData.carrera) {
      agregarEstudiante(formData);
      setFormData({ nombre: '', email: '', carrera: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="carrera" placeholder="Carrera" value={formData.carrera} onChange={handleChange} />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
