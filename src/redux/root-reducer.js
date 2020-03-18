import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import incomeReducer from './income/Income.reducer';
// import cartReducer from './cart/cart.reducer';
// import directoryReducer from './directory/directory.reducer';
// import shopReducer from './shop/shop.reducers';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['incomesAndExpenses']
};

const rootReducer = combineReducers({
  income: incomeReducer
  // cart: cartReducer,
  // directory: directoryReducer,
  // shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
