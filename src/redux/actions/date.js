import * as type from '../constants/date';

export const fetchDate = (dispatch) => {

    fetch('http://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => dispatch(receiveDate(data)));

    return {
        type: type.DATE_FETCH,
        payload: {}
    }
}

export const receiveDate = (apiData) => {
    return {
        type: type.DATE_FETCH_RECEIVED,
        payload: {date: apiData.utc_datetime}
    }
}
