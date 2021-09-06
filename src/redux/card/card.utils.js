export const addItemToCard = (cardItems, itemToAdd) => {
    const exists = cardItems.find(item => item.name === itemToAdd.name);

    if (exists) {
        return cardItems.map(item => item.name === itemToAdd.name ?
            {...item, quantity: item.quantity + 1} :
            item
        );
    }

    return [...cardItems, {...itemToAdd, quantity: 1}];
};

export const clearItemFromCard = (cardItems, itemToRemove) =>
    (cardItems.filter(item => item.id !== itemToRemove.id));


export const removeItem = (cardItems, itemToRemove) => {

    const find = cardItems.find(item => item.name === itemToRemove.name);

    if (find.quantity === 1){
        return (cardItems.filter(item => item.name !== itemToRemove.name));
    }

    return cardItems.map(item => item.name === itemToRemove.name ? {
            ...item, quantity: item.quantity - 1
        } : item);

};