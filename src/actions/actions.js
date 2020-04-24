export const BUY_ITEM = 'BUY_ITEM'; // Export the buy item type

// Created am action function to buy an item
export const buyItem = item => ({
    // dipsatch an action here to add an item
    type: BUY_ITEM,
    payload: item
})

