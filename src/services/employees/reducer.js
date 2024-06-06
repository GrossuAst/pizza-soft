import { GET_INITIAL_DATA, GET_INITIAL_DATA_FAILED, GET_INITIAL_DATA_SUCCES } from "./action";

const initialState = {
    feedRequest: false,
    feedFailed: false,
    employees: [],
};

export const employeesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INITIAL_DATA:
            return {
                ...state,
                feedRequest: true,
                feedFailed: false
            }
        case GET_INITIAL_DATA_SUCCES: 
            return {
                ...state,
                feedRequest: false,
                feedFailed: false,
                employees: action.payload
            }
        case GET_INITIAL_DATA_FAILED:
            return {
                ...state,
                feedRequest: false,
                feedFailed: true
            }
        default:
            return state;
    }
};