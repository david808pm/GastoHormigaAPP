// components/EditExpense.jsx
import { useState } from 'react';
import { editExpense } from '../services/expenses.js';

const EditExpense = ({ expense, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    valor: expense.valor,
    descripcion: expense.descripcion,
    fecha: expense.fecha,
    categoria: expense.categoria
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
    const updated = editExpense(expense.id, {
      ...formData,
      valor: parseFloat(formData.valor)
    });
    if (updated) {
      onUpdate(updated);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Editar Gasto</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Valor:</label>
            <input
              type="number"
              name="valor"
              value={formData.valor}
              onChange={handleChange}
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
              required
            />
          </div>
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
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExpense;