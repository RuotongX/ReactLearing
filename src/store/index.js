import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;
const enhancer =  composeEnhancers(applyMiddleware(thunk));

const store = createStore(
    reducer,//创建初始数据
    enhancer//使用thunk中间件(是redux的）
);

export default store;