import {CHANGE_INPUT_VALUE, CLICK, DELETE_VALUE,INIT_LIST_ACTION} from "./actionTypes";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
    value
});

export const getItemAction = () => ({
    type: CLICK
})

export const getDeleteAction = (index) => ({
    type:DELETE_VALUE,
    index:index
})

export const initListAction = (data) =>({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = (() =>{
    return (dispatch) =>{
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        })
    }
})