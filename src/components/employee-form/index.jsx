import styles from './employee-form.module.scss';
import InputContainer from './input-container';
import ArchiveSwitch from './archive-switch';
import Dropdown from '../dropdown';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { getCurrentEmployee } from '../../services/current-employee/action';
import { updateFormValues } from '../../services/edit-employee-form/action';

const EmployeeForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { editEmployeeForm, employeesList, currentEmployee } = useSelector((store) => ({
        editEmployeeForm: store.editEmployeeForm.form,
        employeesList: store.employees.employees,
        currentEmployee: store.currentEmployee.employeeData
    }), shallowEqual);

    const employee = employeesList.find((emp) => emp.id === Number(id));
    const { name, birthday, role, phone, isArchive } = currentEmployee;
    const { values, setValues, handleChange } = useForm({ name, birthday, role, phone, isArchive });

    useEffect(() => {
        if(employee) {
            dispatch(getCurrentEmployee(employee));    
        }
    }, [employee, values]);

    useEffect(() => {
        if(employee) {
            setValues({ name, birthday, role, phone, isArchive });
        } 
    }, [name, birthday, role, phone, isArchive]);

    useEffect(() => {
        dispatch(updateFormValues(values));
    }, [values]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('отправлено');
    };

    return (
        <section className={ styles.employeeDetails }> 
            <form className={ styles.form } onSubmit={ handleSubmit }>
                <div className={ styles.formHeader }>
                    <h3 className={ styles.formTitle }>Данные сотрудника</h3>
                </div>
                <div className={ styles.inputGroup }>
                    <InputContainer labelFor='nameInput' inputId='nameInput' name='name' title='Имя сотрудника' values={ values } handleChange={ handleChange } />
                    <InputContainer labelFor='birthday' inputId='birthday' name='birthday' title='Дата рождения' widthMask={ true } values={ values } handleChange={ handleChange } />
                    <InputContainer labelFor='phone' inputId='phone' name='phone' title='Номер телефона' widthMask={ true } values={ values } handleChange={ handleChange } />
                    <Dropdown />
                    <ArchiveSwitch values={ values } handleChange={ handleChange } />
                </div>
                <button type='submit'>сохранить</button>
            </form>
        </section>
    )
};

export default EmployeeForm;