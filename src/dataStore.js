import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./restReducer/rReducer"

// create reducer
const reducer = combineReducers({

    reducer1: restReducer

})


// create middleware
const middleware = [thunk]



// create store
const store = createStore(reducer, applyMiddleware(...middleware))
// reducer , middleware


export default store