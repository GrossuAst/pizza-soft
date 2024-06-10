import { combineReducers } from 'redux';
import { employeesReducer } from './employees/reducer';
import { editEmployeeFormReducer } from './edit-employee-form/reducer';
import { currentEmployeeReducer } from './current-employee/reducer';

export const rootReducer = combineReducers({
    employees: employeesReducer,
    // editEmployeeForm: editEmployeeFormReducer,
    currentEmployee: currentEmployeeReducer,
});