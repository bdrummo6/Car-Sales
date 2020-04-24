export const BUY_ITEM = 'BUY_ITEM'; // Export the BUY_ITEM type
export const REMOVE_FEATURE = 'REMOVE_FEATURE'; // Export the REMOVE_FEATURE type

// Created am action function to buy an item
export const buyItem = item => ({
    // dipsatch an action here to add an item
    type: BUY_ITEM,
    payload: item
})

// Created am action function to remove a feature
export const removeFeature = item => ({
    // dipsatch an action here to add an item
    type: REMOVE_FEATURE,
    payload: item
})
