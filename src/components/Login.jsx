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
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Documento:</label>
          <input
            type="text"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>No tienes cuenta? <a href="/register">Regístrate</a></p>
    </div>
  );
};

export default Login;