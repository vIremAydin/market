import {createSelector} from "reselect";

const selectCard = state => state.card;

export const selectCardItems = createSelector([selectCard], card => card.cardItems);

export const selectCardHidden = createSelector([selectCard], card=> card.hidden);

export const selectCardItemsCount =
    createSelector([selectCardItems], cardItems => cardItems
        .reduce((total, cardItem) => cardItem.quantity + total, 0));

export const selectCardTotal = createSelector([selectCardItems], cardItems => cardItems.reduce(
    (total, cardItem) => cardItem.price * cardItem.quantity + total,0
));