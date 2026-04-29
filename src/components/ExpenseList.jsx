// components/ExpenseList.jsx
const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h3>Mis Gastos</h3>
      {expenses.length === 0 ? (
        <p>No hay gastos registrados.</p>
      ) : (
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              <strong>{expense.descripcion}</strong> - ${expense.valor} - {expense.fecha} - Categoría: {expense.categoria}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;