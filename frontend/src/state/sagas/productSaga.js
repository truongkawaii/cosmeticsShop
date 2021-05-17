import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getAllProductSuccess, getListRecruitmentSuccess, getListUserRecSuccess, getListUserSuccess } from '../actions';
import UserService from '../../Services/user.service';
import CandidateService from '../../Services/cadidate.service';
import UpfileService from '../../Services/upfile.service';
import { toastSuccess } from '../../Helper/toastHelper';
import ProductsService from '../../Services/product.service';



function* getListProducts() {

    try {
        
        const res = yield call(ProductsService.listProducts);
         yield put(getAllProductSuccess(res));
 
    } catch (error) { }
}
 



export default function* productSaga() {
    yield takeLatest(Actions.GET_ALL_PRODUCT, getListProducts);


}
