import React from 'react';
import BudgetIncome from './BudgetIncome';
import BudgetExpense from './BudgetExpense';
import { connect } from 'react-redux';
import '../styles/BudgetList.css';

function BudgetList({ incomes, option, expenses }) {
  console.log(option);
  return (
    <div className="row mt-5">
      <div className="col-6">
        <h4 className="text-success">INCOME</h4>
        <hr />
        {incomes.map(income => (
          <BudgetIncome
            key={income.id}
            name={income.name}
            cost={income.cost}
            income={income}
          />
        ))}
      </div>
      <div className="col-6 ml-auto">
        <h4 className="text-danger">EXPENSES</h4>
        <hr />
        {expenses.map(expense => (
          <BudgetExpense
            key={expense.id}
            name={expense.name}
            cost={expense.cost}
            expense={expense}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  incomes: state.income.incomes,
  expenses: state.income.expenses,
  option: state.income.option
});

export default connect(mapStateToProps)(BudgetList);
