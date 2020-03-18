import React from 'react';
import BudgetForm from './Components/BudgetForm';
import BudgetList from './Components/BudgetList';
import BudgetAppUI from './Components/BudgetAppUI';
import './App.css';

function App() {
  return (
    <div>
      <BudgetAppUI />
      <BudgetForm />
      <div className="container">
        <BudgetList />
      </div>
    </div>
  );
}

export default App;
