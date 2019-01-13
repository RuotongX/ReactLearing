import React, {Component} from 'react';
import 'antd/dist/antd.css'
import store from'./store';
import {getInputChangeAction, getItemAction, getDeleteAction,initListAction} from "./store/actionCreators";
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI inputValue = {this.state.inputValue}
                        handleInputChange = {this.handleInputChange}
                        handleClick = {this.handleClick}
                        handleDeleteClick = {this.handleDeleteClick}
                        list = {this.state.list}/>
        )
    }

    componentDidMount(){
        axios.get('/list.json').then((res) =>{
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        })
    }

    handleInputChange(e){
                    const action = getInputChangeAction(e.target.value);
                    store.dispatch(action);

    }

    handleStoreChange(){
                    this.setState(store.getState());
    }

    handleClick(){
                    const action = getItemAction();
                    store.dispatch(action);

    }


    handleDeleteClick(index){
                    const action = getDeleteAction(index);
                    store.dispatch(action);
    }
}



export default TodoList;