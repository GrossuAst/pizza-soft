import { combineReducers } from 'redux';
import { employeesReducer } from './employees/reducer';

export const rootReducer = combineReducers({
    employees: employeesReducer,
});