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
      <h3>Añadir Gasto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Valor:</label>
          <input
            type="number"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Añadir Gasto</button>
      </form>
    </div>
  );
};

export default AddExpense;