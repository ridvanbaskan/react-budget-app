import React from 'react';
import { connect } from 'react-redux';
import '../styles/BadgetAppUI.css';

function BudgetAppUI({ incomes, expenses }) {
  let totalIncome = 0;
  let totalExpense = 0;
  let totalCost = 0;
  incomes.map(income => {
    totalIncome += income.cost;
  });
  expenses.map(expense => {
    totalExpense += expense.cost;
  });
  totalCost = totalIncome + totalExpense;
  return (
    <div className="badget-app-ui">
      <img
        src="https://images.unsplash.com/photo-1512639491857-73bf019fda29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
        alt="nature"
      />
      <div className="context">
        <h4>Available Budget in March 2020</h4>
        <p className="total h1 mt-3">{`${totalCost}  $`}</p>
        <div className="income d-flex justify-content-between align-items-center mt-5 bg-success px-2 pt-3">
          <p className="font-weight-light">INCOME</p>
          <p className="font-weight-light">{totalIncome}</p>
        </div>
        <div className="income d-flex justify-content-between align-items-center mt-3 bg-danger px-2 pt-3">
          <p className="font-weight-light">EXPENSES</p>
          <p className="font-weight-light">{totalExpense}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  incomes: state.income.incomes,
  expenses: state.income.expenses
});

export default connect(mapStateToProps)(BudgetAppUI);
