export const ADDTOCARTCOUNT = "ADDTOCARTCOUNT";
export const REMOVEFROMCARTCOUNT = "REMOVEFROMCARTCOUNT";
export const CLEARCARTCOUNT = "CLEARCARTCOUNT";
export const CLEARCARTITEMS = "CLEARCARTITEMS";

export const addToCartCount = () => {
  return {
    type: ADDTOCARTCOUNT,
  };
};
export const removeFromCartCount = () => {
  return {
    type: REMOVEFROMCARTCOUNT,
  };
};
export const clearCartCount = () => {
  return {
    type: CLEARCARTCOUNT,
  };
};
export const clearCartItems = () => {
  return {
    type: CLEARCARTITEMS,
  };
};
