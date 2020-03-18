import React from 'react';
import '../styles/BudgetList.css';
import { connect } from 'react-redux';
import { deleteIncome } from '../redux/income/income.actions';

function BudgetIncome({ name, cost, deleteIncome, income }) {
  return (
    <div className="ml-3">
      <div className="budget d-flex justify-content-between">
        <p>{name}</p>
        <p>
          {cost}
          <i
            className="delete-icon fas fa-trash ml-2 text-danger"
            onClick={() => deleteIncome(income)}
          ></i>
        </p>
      </div>
      <hr />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteIncome: income => dispatch(deleteIncome(income))
});

export default connect(null, mapDispatchToProps)(BudgetIncome);
