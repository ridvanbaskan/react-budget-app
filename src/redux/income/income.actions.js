export const addNewIncome = newIncome => ({
  type: 'ADD_INCOME',
  payload: newIncome
});
export const deleteIncome = income => ({
  type: 'DELETE_INCOME',
  payload: income
});
export const addNewExpense = newIncome => ({
  type: 'ADD_EXPENSE',
  payload: newIncome
});
export const deleteExpense = expense => ({
  type: 'DELETE_EXPENSE',
  payload: expense
});
export const changeOption = option => ({
  type: 'CHANGE_OPTION',
  payload: option
});
