export const GET_CURRENT_EMPLOYEE = 'GET_CURRENT_EMPLOYEE';

export function getCurrentEmployee(data) {
    return function(dispatch) {
        dispatch({
            type: GET_CURRENT_EMPLOYEE,
            payload: data
        });
    }
};