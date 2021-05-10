import actions from './action.type';

export const getAllProduct = () => ({
  type: actions.GET_ALL_PRODUCT
})

export const getAllProductSuccess = (payload ) => ({
  type: actions.GET_ALL_PRODUCT_SUCCESS,
  payload  
})

