import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) =>{
    return(
        <div style={{marginTop:'10px', marginLeft:'10px'}}>
            <div>
                <Input value = {props.inputValue}
                       placeholder='Please input your notes'
                       style ={{width:'200px', marginRight:'10px'}}
                       onChange={props.handleInputChange}
                       onKeyPress={event => {
                           if(event.key === "Enter"){
                               props.handleClick();
                           }
                       }}
                />
                <Button type = "primary"
                        onClick={props.handleClick}>OK</Button>
            </div>
            <List
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item
                        onClick = {() =>{
                            props.handleDeleteClick(index)//这个箭头函数的存在原因是要把index的值传给父级组件
                        }} >{item}
                    </List.Item>
                )}
                style = {{width:'260px',marginTop:'10px'}}
            />
        </div>
    )
}



export default TodoListUI;