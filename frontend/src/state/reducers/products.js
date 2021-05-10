import { Actions } from "../actions";

const initialState = {
  data:[]
};
function products(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ALL_PRODUCT_SUCCESS:
    //   const {posts,total} = action.payload;  
      return { ...state,data:action.payload};
    default:
      return { ...state};
  } 
}
export default products;
  