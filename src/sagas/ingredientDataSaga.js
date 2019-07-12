import axios from '../common/axiosInstance';
import {put,takeEvery} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';

const ingrediantsAPI=()=>{
   
    const request = axios.get('https://my-burger-app-21c06.firebaseio.com/ingrediants.json');
   
    return request
}

function* getIngrediants(action)
{
    try {
       
        const ingrediants = yield ingrediantsAPI();
       console.log(ingrediants)
        yield  put({type: actionType.INSERT_INGREDIANTS_LIST, ingrediantList: ingrediants.data});
      
     } catch (e) {
        yield  put({type: actionType.FETCH_INGREDIANTS_ERROR, error: true});
     }
}

function* ingrediantDataSaga() {
    yield takeEvery( actionType.INIT_INGREDIANTS, getIngrediants);
  }

  export default ingrediantDataSaga;