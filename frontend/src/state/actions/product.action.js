import actions from './action.type';

export const getAllProduct = () => ({
  type: actions.GET_ALL_PRODUCT
})

export const getAllProductSuccess = (payload) => ({
  type: actions.GET_ALL_PRODUCT_SUCCESS,
  payload
})

export const paginationProduct = (payload) => ({
  type: actions.PAGINATION_DATA,
  payload
})
export const showModal = () => ({
  type: actions.SHOW_MODAL,

})
export const hideModal = () => ({
  type: actions.HIDE_MODAL,

})

