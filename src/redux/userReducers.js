import {GET_USERS, FILTER_USERS, CHANGE_SORT, INIT_BRANDS, INIT_TAGS, FILTER_USERS_TAG} from './types'
import {initBrands, initTags} from "./actions";

const initialState = {
    users:[],
    loading:true,
    brands:[{name: "all", quantity: 1740, checked: true},{name:"Bayer-and-Sons", quantity: 83, checked:false}, {name: "Bernier-Hane", quantity: 78, checked: false}],
    sorted: "newToOld",
    tags:[{name: "all", quantity: 1740, checked: true}],

};

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        case FILTER_USERS: {
            return {
                ...state,
                brands: action.payload
            }
        }

        case FILTER_USERS_TAG:{
            return {
                ...state,
                tags: action.payload
            }
        }
        case CHANGE_SORT:{
            return {
                ...state,
                sorted: action.payload
            }
        }
        case INIT_BRANDS:{
            return {
                ...state,
                brands: initBrands(state.users),
            }

        }
        case INIT_TAGS:{
            return {
                ...state,
                tags:initTags(state.users),
            }
        }

        default: return {...state}
    }

}

