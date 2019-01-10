import {CHANGE_INPUT_VALUE,CLICK,DELETE_VALUE} from "./actionTypes";

const defaultState = {
    inputValue:'',
    list:[]
}

//reducer可以接收state但是不能改变state.
export default (state = defaultState,action)=>{
    switch(action.type){
        case CHANGE_INPUT_VALUE:{
            const newState = JSON.parse(JSON.stringify(state));//对state进行深拷贝
            newState.inputValue = action.value;
            return newState;

        }
        case CLICK:{
            const newState = JSON.parse(JSON.stringify(state));//对state进行深拷贝
            newState.list = [...newState.list,newState.inputValue];
            newState.inputValue = '';
            return newState;//当返回这个新的state之后store会把原先的数据替换为新的state，这也是为什么每次都要用newState而不是state的原因，
            //此外，这里面的default state无法更改，所以用newState把store里的数据拷贝出来

        }
        case DELETE_VALUE: {
            const newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.value,1);
            return newState;

        }
        default:
            break;

    }
    return state;
}