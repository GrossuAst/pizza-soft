import { GET_CURRENT_EMPLOYEE } from "./action";

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
            }
        }
        default:
            return state;
    }
};