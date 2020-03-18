const INITIAL_STATE = {
  incomes: [
    { id: 1, name: 'Website Project', cost: 2500 },
    { id: 2, name: 'Sold Car', cost: 1500 }
  ],
  expenses: [
    { id: 3, name: 'Holiday', cost: -1200 },
    { id: 4, name: 'Buy New Car', cost: -700 }
  ],
  option: ''
};

const incomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        incomes: [
          ...state.incomes,
          { name: action.payload.name, cost: action.payload.value }
        ]
      };
    case 'DELETE_INCOME':
      return {
        ...state,
        incomes: state.incomes.filter(income => income.id !== action.payload.id)
      };
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [
          ...state.expenses,
          { name: action.payload.name, cost: action.payload.value }
        ]
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload.id
        )
      };
    case 'CHANGE_OPTION':
      return {
        ...state,
        option: action.payload
      };
    default:
      return state;
  }
};

export default incomeReducer;
