import {
  ADDTOCARTCOUNT,
  REMOVEFROMCARTCOUNT,
  CLEARCARTCOUNT,
  CLEARCARTITEMS,
} from "../Actions/cartActions";
const initialState = {
  inCart: [],
  cartCount: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCARTCOUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case REMOVEFROMCARTCOUNT:
      return {
        ...state,
        cartCount: state.cartCount - 1,
      };
    case CLEARCARTCOUNT:
      return {
        ...state,
        cartCount: state.cartCount - state.cartCount,
      };
    case CLEARCARTITEMS:
      return {
        ...state,
        inCart: (state.inCart = []),
      };
    default:
      return state;
  }
};
export default cartReducer;
