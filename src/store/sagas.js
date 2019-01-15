import { put,takeEvery } from 'redux-saga/effects'
import {GET_INIT_LIST} from'./actionTypes';
import { initListAction } from "./actionCreators";
import axios from 'axios';

function* getInitList(){
    try {
        const res = yield axios.get('list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch(e){
        const data = ['QAQ','ORZ'];
        const action = initListAction(data);
        yield put(action);
    }
}

//generator function
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}



export default mySaga;