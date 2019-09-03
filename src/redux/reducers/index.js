import { combineReducers } from "redux";
import todoReducer from './todo';
import dateReducer from './date';

const reducers = combineReducers({
    todoReducer,
    dateReducer
});

export default reducers;
