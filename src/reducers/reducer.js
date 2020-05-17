import data from '../data';
import { BUY_ITEM, REMOVE_FEATURE } from '../actions/actions'; // imported the BUY_ITEM and REMOVE_FEATURE type from actions

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
            case REMOVE_FEATURE:
              return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                  ...state.car,
                  features: state.car.features.filter(item => item !== action.payload)
                },
                additionalFeatures: [...state.additionalFeatures, action.payload]
              };
        default:
            return state;
    }
}

export default reducer;

