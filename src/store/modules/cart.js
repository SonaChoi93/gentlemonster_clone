const ADD_CART = 'ADD_CART';
const DELETE_CART = 'DELETE_CART';
const DELETE_ALL = 'DELETE_ALL';

export const addCart = data => ({ type: ADD_CART, data });
export const deleteCard = id => ({ type: DELETE_CART, id });
export const deleteAll = () => ({ type: DELETE_ALL });

const initialState = {
  carts: [],
  count: 1,
  number: 0
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        carts: state.carts.concat({
          number: state.number,
          count: state.count,
          ...action.data
        }),
        number: state.number + 1
      };

    default:
      return state;
  }
}
