import React from 'react';
import { connect } from 'react-redux';
import {
  addNewIncome,
  addNewExpense,
  changeOption
} from '../redux/income/income.actions';
import '../styles/budget-form.css';
import { v4 as uuidv4 } from 'uuid';

function BudgetForm({ addNewIncome, addNewExpense, changeOption }) {
  const [income, setIncome] = React.useState('');
  const [cost, setCost] = React.useState('');
  const [value, setValue] = React.useState('+');

  const handleChangeIncome = e => {
    setIncome(e.target.value);
  };
  const handleChangeValue = e => {
    setCost(e.target.value);
  };
  const handleSelect = e => {
    setValue(e.target.value);
    changeOption(value);
  };
  console.log(value);
  const newIncome = {
    id: uuidv4(),
    name: income,
    value: cost
  };
  const newExpense = {
    id: uuidv4(),
    name: income,
    value: -cost
  };

  const handleSubmit = e => {
    e.preventDefault();
    value === '+' ? addNewIncome(newIncome) : addNewExpense(newExpense);
    setIncome('');
    setCost('');
  };
  return (
    <div className="budget-form">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div
            style={{ height: '70px' }}
            className="form-row justify-content-center align-items-center"
          >
            <div className="col-1">
              <select
                className="custom-select"
                onChange={handleSelect}
                value={value}
              >
                <option value="+">+</option>
                <option value="-">-</option>
              </select>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                value={income}
                placeholder="Add Description"
                onChange={handleChangeIncome}
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                placeholder="Value"
                value={cost}
                onChange={handleChangeValue}
              />
            </div>
            <div className="col-2 mt-2">
              <button type="submit" className="mb-2">
                <i className="check-icon far fa-check-circle fa-2x"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addNewIncome: newIncome => dispatch(addNewIncome(newIncome)),
  addNewExpense: newExpense => dispatch(addNewExpense(newExpense)),
  changeOption: value => dispatch(changeOption(value))
});

export default connect(null, mapDispatchToProps)(BudgetForm);
