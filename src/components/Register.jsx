// components/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../services/users.js';

const Register = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    tipoDocumento: '',
    documento: '',
    edad: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombres.trim() || !formData.tipoDocumento.trim() || !formData.documento.trim() || !formData.edad) {
      setError('Todos los campos son requeridos');
      return;
    }
    addUser(formData);
    navigate('/login');
  };

  return (
    <div className="page">
      <div className="page-content">
        <h2>Crear Cuenta</h2>
        <p>Regístrate para comenzar a controlar tus gastos</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombres Completos:</label>
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              required
            />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label>Tipo de Documento:</label>
              <input
                type="text"
                name="tipoDocumento"
                value={formData.tipoDocumento}
                onChange={handleChange}
                placeholder="Ej: CC"
                required
              />
            </div>
            <div className="form-group">
              <label>Número de Documento:</label>
              <input
                type="text"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                placeholder="Ej: 123456789"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              min="0"
              max="120"
              required
            />
          </div>
          {error && <p className="error-message">⚠️ {error}</p>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Crear Cuenta
          </button>
        </form>
        <div className="form-link">
          ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
        </div>
      </div>
    </div>
  );
};

export default Register;