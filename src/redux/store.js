import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
//import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './index'


const middleware = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;