// components/Dashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpenseList from './ExpenseList.jsx';
import AddExpense from './AddExpense.jsx';
import { getExpenses } from '../services/expenses.js';

const Dashboard = () => {
  const [expenses, setExpenses] = useState(getExpenses());
  const navigate = useNavigate();

  const handleExpenseAdded = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <AddExpense onExpenseAdded={handleExpenseAdded} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;