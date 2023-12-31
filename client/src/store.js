import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

const middleware = [thunk];

if(process.env.NODE_ENV === 'production') {
    var store = legacy_createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware)
    ));
   
} else {
    store = legacy_createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
}

export default store;

