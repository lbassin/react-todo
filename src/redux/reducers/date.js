import * as type from '../constants/date';

const initialState = {
    date: Date.now()
};

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case type.DATE_FETCH_RECEIVED:
            return Object.assign({}, state, { date: action.payload.date })
        default:
            return state;
    }
}

export default reducer;
