// components/AddExpense.jsx
import { useState } from 'react';
import { addExpense } from '../services/expenses.js';

const AddExpense = ({ onExpenseAdded }) => {
  const [formData, setFormData] = useState({
    valor: '',
    descripcion: '',
    fecha: '',
    categoria: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.valor || !formData.descripcion.trim() || !formData.fecha || !formData.categoria.trim()) {
      setError('Todos los campos son requeridos');
      return;
    }
    const newExpense = addExpense({
      ...formData,
      valor: parseFloat(formData.valor)
    });
    onExpenseAdded(newExpense);
    setFormData({
      valor: '',
      descripcion: '',
      fecha: '',
      categoria: ''
    });
    setError('');
  };

  return (
    <div>
      <h3>➕ Añadir Nuevo Gasto</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Valor (COP):</label>
          <input
            type="number"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            placeholder="0"
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Ej: Café, Almuerzo..."
            required
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Categoría:</label>
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              placeholder="Ej: Alimentación"
              required
            />
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn btn-primary">
          Guardar Gasto
        </button>
      </form>
    </div>
  );
};

export default AddExpense;