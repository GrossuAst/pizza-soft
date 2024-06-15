import styles from './archive-switch.module.scss';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { updateFormArchiveStatus } from '../../../services/edit-employee-form/action';
import { updateEmployeeArchiveStatus } from '../../../services/current-employee/action';

const ArchiveSwitch = () => {
    const dispatch = useDispatch();

    const { editEmployeeForm } = useSelector((store) => ({
        editEmployeeForm: store.editEmployeeForm.form,
    }), shallowEqual);

    function handleChangeCheckbox(e) {
        const isChecked = e.target.checked;
        dispatch(updateFormArchiveStatus(isChecked));
    };

    return (
        <div className={styles.wrap}>

            <label htmlFor="slider-point" className={ `${ styles.statusLabel } ${ !editEmployeeForm.isArchive && styles.statusActive }` }>
                Активен
            </label>

            <input className={styles.checkbox} type="checkbox" id="slider-point" 
                checked={ editEmployeeForm.isArchive }
                onChange={ (e) => handleChangeCheckbox(e) } 
            />

            <label className={styles.label} htmlFor="slider-point">
                <span className={styles.slider} ></span>
            </label>

            <label htmlFor="slider-point" className={ `${ styles.statusLabel } ${ editEmployeeForm.isArchive && styles.stausArchive }` }>
                В архиве
            </label>

        </div>
    )
};

export default ArchiveSwitch;