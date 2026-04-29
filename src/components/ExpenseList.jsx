// components/ExpenseList.jsx
const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="expense-list">
      <h3>Mis Gastos</h3>
      {expenses.length === 0 ? (
        <div className="expense-empty">
          <p>No hay gastos registrados.</p>
        </div>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.descripcion}</td>
                <td>${expense.valor.toLocaleString()}</td>
                <td>{expense.fecha}</td>
                <td>{expense.categoria}</td>
                <td>
                  <div className="expense-actions">
                    <button className="btn-warning" onClick={() => onEdit(expense)}>
                      Editar
                    </button>
                    <button className="btn-danger" onClick={() => onDelete(expense.id)}>
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;