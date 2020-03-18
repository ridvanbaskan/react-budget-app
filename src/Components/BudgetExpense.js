import React from 'react';
import '../styles/BudgetList.css';
import { connect } from 'react-redux';
import { deleteExpense } from '../redux/income/income.actions';

function BudgetExpense({ name, cost, expense, deleteExpense }) {
  console.log(expense);
  return (
    <div className="ml-3">
      <div className="budget d-flex justify-content-between">
        <p>{name}</p>
        <p>
          {cost}
          <i
            className="delete-icon fas fa-trash ml-2 text-danger"
            onClick={() => deleteExpense(expense)}
          ></i>
        </p>
      </div>
      <hr />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteExpense: expense => dispatch(deleteExpense(expense))
});

export default connect(null, mapDispatchToProps)(BudgetExpense);
