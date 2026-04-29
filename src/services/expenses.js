// services/expenses.js
// Mock data for expenses
const mockExpenses = [
  {
    id: 1,
    valor: 5000,
    descripcion: 'Café diario',
    fecha: '2024-04-28',
    categoria: 'Alimentación'
  },
  {
    id: 2,
    valor: 2000,
    descripcion: 'Transporte',
    fecha: '2024-04-27',
    categoria: 'Transporte'
  }
];

// Function to get expenses from localStorage or mock
export const getExpenses = () => {
  const stored = localStorage.getItem('expenses');
  return stored ? JSON.parse(stored) : mockExpenses;
};

// Function to save expenses to localStorage
export const saveExpenses = (expenses) => {
  localStorage.setItem('expenses', JSON.stringify(expenses));
};

// Function to add a new expense
export const addExpense = (expense) => {
  const expenses = getExpenses();
  const newId = expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1;
  const newExpense = { ...expense, id: newId };
  expenses.push(newExpense);
  saveExpenses(expenses);
  return newExpense;
};

// Function to edit an expense
export const editExpense = (id, updatedData) => {
  const expenses = getExpenses();
  const index = expenses.findIndex(e => e.id === id);
  if (index !== -1) {
    expenses[index] = { ...expenses[index], ...updatedData };
    saveExpenses(expenses);
    return expenses[index];
  }
  return null;
};

// Function to delete an expense
export const deleteExpense = (id) => {
  const expenses = getExpenses();
  const filtered = expenses.filter(e => e.id !== id);
  saveExpenses(filtered);
  return true;
};