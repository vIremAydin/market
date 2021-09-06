import {CardActionTypes} from "./card.types";
import {addItemToCard, clearItemFromCard, removeItem} from "./card.utils";


const INITIAL_STATE = {
    hidden: true,
    cardItems: []
};

const CardReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CardActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CardActionTypes.ADD_ITEM:
            return {
              ...state,
              cardItems: addItemToCard(state.cardItems, action.payload)
            };
        case CardActionTypes.CLEAR_ITEM_FROM_CARD:
            return {
              ...state,
                cardItems: clearItemFromCard(state.cardItems, action.payload)
            };
        case CardActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cardItems: removeItem(state.cardItems, action.payload)
            };
        default:
            return state;
    }
}

export default CardReducer;