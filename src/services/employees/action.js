import { getData } from "../../utils/fake-api";

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';
export const GET_INITIAL_DATA_FAILED = 'GET_INITIAL_DATA_FAILED';
export const GET_INITIAL_DATA_SUCCES = 'GET_INITIAL_DATA_SUCCES';

export function getInitialData() {
    return function(dispatch) {
        dispatch({
            type: GET_INITIAL_DATA
        });
        getData()
            .then((res) => {
                if(res) {
                    dispatch({
                        type: GET_INITIAL_DATA_SUCCES,
                        payload: res,
                    })
                } else {
                    dispatch({
                        type: GET_INITIAL_DATA_FAILED
                    })
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_INITIAL_DATA_FAILED
                })
            })
    }
};