import { GET_CURRENT_EMPLOYEE, UPDATE_EMPLOYEE_ARCHIVE_STATUS } from "./action";

const initialState = {
    employeeData: {
        name: '',
        birthday: '',
        role: '',
        phone: '',
        isArchive: '',
        id: ''
    }
};

export const currentEmployeeReducer = (state = initialState, action) => {
    const data = action.payload;
    switch(action.type) {
        case GET_CURRENT_EMPLOYEE: {
            return {
                ...state,
                employeeData: { name: data.name, birthday: data.birthday, role: data.role, phone: data.phone, isArchive: data.isArchive, id: data.id }
            };
        };
        case UPDATE_EMPLOYEE_ARCHIVE_STATUS: {
            return {
                ...state,
                employeeData: {
                    ...state.employeeData,
                    isArchive: action.payload
                }
            };
        };
        default:
            return state;
    }
};