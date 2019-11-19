import { combineReducers } from 'redux';
import category from './category';
import cart from './cart';

export default combineReducers({
  category,
  cart
});
