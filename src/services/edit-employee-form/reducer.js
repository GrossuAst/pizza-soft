import { UPDATE_VALUES, UPDATE_FORM_ARCHIVE_STATUS } from "./action";

const initialState = {
    form: {
        name: '',
        birthday: '',
        role: '',
        phone: '',
        isArchive: '',
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
        case UPDATE_FORM_ARCHIVE_STATUS: {
            return {
                ...state,
                form: {
                    ...state.form,
                    isArchive: action.payload
                }
            };
        };
        default:
            return state;
    }
};