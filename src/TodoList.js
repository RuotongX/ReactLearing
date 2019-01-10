import React, {Component} from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
import store from'./store';
import {getInputChangeAction, getItemAction, getDeleteAction} from "./store/actionCreators";

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // console.log(store.getState());
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div style={{marginTop:'10px', marginLeft:'10px'}}>
                <div>
                    <Input value = {this.state.inputValue}
                           placeholder='Please input your notes'
                           style ={{width:'200px', marginRight:'10px'}}
                           onChange={this.handleInputChange}
                           onKeyPress={event => {
                               if(event.key === "Enter"){
                                   this.handleClick();
                               }
                           }}
                    />
                    <Button type = "primary"
                            onClick={this.handleClick}>OK</Button>
                </div>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item
                           onClick = {this.handleDeleteClick.bind(this, index)} >{item}
                        </List.Item>
                    )}
                    style = {{width:'260px',marginTop:'10px'}}
                />
            </div>
        )
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