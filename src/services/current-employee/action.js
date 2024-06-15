export const GET_CURRENT_EMPLOYEE = 'GET_CURRENT_EMPLOYEE';
export const UPDATE_EMPLOYEE_ARCHIVE_STATUS = 'UPDATE_EMPLOYEE_ARCHIVE_STATUS';

export function getCurrentEmployee(data) {
    return function(dispatch) {
        dispatch({
            type: GET_CURRENT_EMPLOYEE,
            payload: data
        });
    }
};

export function updateEmployeeArchiveStatus (status) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_EMPLOYEE_ARCHIVE_STATUS,
            payload: status
        });
    }
}