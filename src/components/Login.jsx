// components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findUserByDocumento } from '../services/users.js';

const Login = () => {
  const [documento, setDocumento] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!documento.trim()) {
      setError('El documento es requerido');
      return;
    }
    const user = findUserByDocumento(documento);
    if (user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('Usuario no encontrado');
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        <h2>💰 Gastos Hormiga</h2>
        <p>Controla tus gastos hormiga de forma simple y efectiva</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Número de Documento:</label>
            <input
              type="text"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="Ej: 123456789"
              required
            />
          </div>
          {error && <p className="error-message">⚠️ {error}</p>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Iniciar Sesión
          </button>
        </form>
        <div className="form-link">
          ¿No tienes cuenta? <a href="/register">Crear nueva cuenta</a>
        </div>
      </div>
    </div>
  );
};

export default Login;