import {
    GET_USERS,
    USERS_ERROR,
    CHANGE_SORT,
    INIT_BRANDS,
    FILTER_USERS,
    GET_MUGS,
    GET_SHIRTS,
    INIT_TAGS,
    FILTER_USERS_TAG
} from './types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    let res = [];
    try {
        res = await axios.get(`https://getirserver.herokuapp.com/api/products`);

        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    } catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

};

export const changeSort = (item) => ({
    type: CHANGE_SORT,
    payload: item
})

export const initBrands = (users) => {
    let br = [{name: "all", quantity: 1740, checked: true}];
//users
    if (users) {
        for (let i = 0; i < users.length; i++) {
            let user = users[i];

            const exists = br.find(item => user.manufacturer === item.name);
            if (exists) {
                br = br.map(item => item.name === user.manufacturer ?
                    {...item, quantity: item.quantity + 1} :
                    item
                );
            } else {
                br = [...br, {name: user.manufacturer, quantity: 1}]
            }
        }
    }

    return br;
}


export const initB = () => ({
        type: INIT_BRANDS
    }
);
export const initTags = (users) =>{
    let br = [{name: "all", quantity: 1740, checked: true}];
//users
    if (users) {
        for (let i = 0; i < users.length; i++) {
            let user = users[i];

            for(let j = 0; j< user.tags.length; j ++){
                let tag = user.tags[j];

                const exists = br.find(item => item.name === tag);
                if (exists) {
                    br = br.map(item =>  item.name === tag ?
                        {...item, quantity: item.quantity + 1} :
                        item
                    );
                } else {
                    br = [...br, {name: tag, quantity: 1, checked: false}]
                }
            }


        }
    }

    return br;
}

export const initT = () => ({
        type: INIT_TAGS
    }
);

export const filterUsers = (item)=>({
    type: FILTER_USERS,
    payload: item
});

export const filterUsersTag = (item)=>({
    type: FILTER_USERS_TAG,
    payload: item
});





