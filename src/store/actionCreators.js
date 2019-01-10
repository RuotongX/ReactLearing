import {CHANGE_INPUT_VALUE, CLICK, DELETE_VALUE} from "./actionTypes";

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