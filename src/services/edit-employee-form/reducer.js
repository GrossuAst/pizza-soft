import { UPDATE_VALUES } from "./action";

const initialState = {
    form: {
        name: '',
        lastName: '',
        birthday: '',
    }
};

export const editEmployeeFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_VALUES: {
            return {
                ...state,
                form: action.payload
            }
        }
        default:
            return state;
    }
};