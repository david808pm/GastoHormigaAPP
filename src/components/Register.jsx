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
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombres:</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo de Documento:</label>
          <input
            type="text"
            name="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Documento:</label>
          <input
            type="text"
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
      <p>Ya tienes cuenta? <a href="/login">Inicia Sesión</a></p>
    </div>
  );
};

export default Register;