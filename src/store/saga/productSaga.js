import {call, put, takeLatest} from 'redux-saga/effects'

import { fetchProductFailure, fetchProductSuccess, fetchProductsRequest } from '../Slice/productSlice'

function fetchProductsApi(){
    return fetch('/products.json').then((res)=>res.json())
}

function* fetchProducts() {
    try {
        const products = yield call(fetchProductsApi) 
        yield put(fetchProductSuccess(products)) 
    } catch (error) {
    yield put(fetchProductFailure(error.message)) 
    }
}

export default function* productSaga(){
    yield takeLatest(fetchProductsRequest.type, fetchProducts)
}