import {CHANGE_INPUT_VALUE, CLICK, DELETE_VALUE,INIT_LIST_ACTION,GET_INIT_LIST} from "./actionTypes";


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

export const getInitList = () =>({
    type:GET_INIT_LIST
})

// export const getTodoList = (() =>{
//     return (dispatch) =>{
//         axios.get('/list.json').then((res) => {
//             const data = res.data;
//             const action = initListAction(data);
//             dispatch(action);
//         })
//     }
// })