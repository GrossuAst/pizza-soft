export const UPDATE_VALUES = 'UPDATE_VALUES';

export function updateFormValues(values) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_VALUES,
            payload: values
        });
    }
};