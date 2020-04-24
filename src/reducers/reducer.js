import data from '../data';
import { BUY_ITEM } from '../actions/actions'; // imported the BUY_ITEM type from actions

const initialState = data;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ITEM:
            return {
              ...state,
              additionalPrice: state.additionalPrice + action.payload.price,
              car: {
                ...state.car,
                features: state.car.features.concat(action.payload)
              },
              additionalFeatures: state.additionalFeatures.filter(
                item => item !== action.payload
              )
            };
        default:
            return state;
    }
}

export default reducer;

