// import { getData } from "../../utils/fake-api";
import initialData from '../../utils/employees.json';

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

export function getInitialData() {
    return function(dispatch) {
        dispatch({
            type: GET_INITIAL_DATA,
            payload: initialData
        })
    }
};