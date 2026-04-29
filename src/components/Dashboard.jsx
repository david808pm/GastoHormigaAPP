// components/Dashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpenseList from './ExpenseList.jsx';
import AddExpense from './AddExpense.jsx';
import EditExpense from './EditExpense.jsx';
import { getExpenses } from '../services/expenses.js';
import { deleteExpense } from '../services/expenses.js';
import { exportExpensesToPDF } from '../services/export.js';

const Dashboard = () => {
  const [expenses, setExpenses] = useState(getExpenses());
  const [editingExpense, setEditingExpense] = useState(null);
  const navigate = useNavigate();

  const handleExpenseAdded = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
  };

  const handleEditClose = () => {
    setEditingExpense(null);
  };

  const handleEditUpdate = (updatedExpense) => {
    setExpenses(expenses.map(e => e.id === updatedExpense.id ? updatedExpense : e));
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este gasto?')) {
      deleteExpense(id);
      setExpenses(expenses.filter(e => e.id !== id));
    }
  };

  const handleExport = () => {
    exportExpensesToPDF(expenses);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  return (
    <>
      <nav className="navbar">
        <h1>💰 Gastos Hormiga</h1>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </nav>
      <div className="dashboard">
        <div className="container">
          <div className="dashboard-header">
            <h2>Hola, {currentUser.nombres}</h2>
          </div>
          <div className="card">
            <AddExpense onExpenseAdded={handleExpenseAdded} />
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3>Mis Gastos</h3>
              <button className="btn-export" onClick={handleExport} disabled={expenses.length === 0}>
                📥 Exportar a PDF
              </button>
            </div>
            <ExpenseList 
              expenses={expenses}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      {editingExpense && (
        <EditExpense
          expense={editingExpense}
          onClose={handleEditClose}
          onUpdate={handleEditUpdate}
        />
      )}
    </>
  );
};

export default Dashboard;