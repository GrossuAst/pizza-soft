import { GET_INITIAL_DATA } from "./action";

const initialState = {
    employees: []
};

export const employeesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INITIAL_DATA:
            return {
                ...state,
                employees: action.payload
            }
        default:
            return state;
    }
};