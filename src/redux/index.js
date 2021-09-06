import { combineReducers } from 'redux'
import userReducer from './userReducers'
import CardReducer from "./card/card.reducer";

export default combineReducers({
    users: userReducer,
    card: CardReducer,
})