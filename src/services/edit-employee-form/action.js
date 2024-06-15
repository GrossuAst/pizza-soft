export const UPDATE_VALUES = 'UPDATE_VALUES';
export const UPDATE_FORM_ARCHIVE_STATUS = 'UPDATE_FORM_ARCHIVE_STATUS';

export function updateFormValues(values) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_VALUES,
            payload: values
        });
    }
};

export function updateFormArchiveStatus (status) {
    return function(dispatch) {
        dispatch({
            type: UPDATE_FORM_ARCHIVE_STATUS,
            payload: status
        });
    }
}