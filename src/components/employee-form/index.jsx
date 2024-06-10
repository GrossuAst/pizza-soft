import styles from './employee-form.module.scss';
import InputContainer from './input-container';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useEffect } from 'react';
import { getCurrentEmployee } from '../../services/current-employee/action';

const EmployeeForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { employeesList, currentEmployee } = useSelector((store) => ({
        employeesList: store.employees.employees,
        currentEmployee: store.currentEmployee.employeeData
    }), shallowEqual);

    const employee = employeesList.find((emp) => emp.id === Number(id));
    
    useEffect(() => {
        if(employee) {
            dispatch(getCurrentEmployee(employee));
        }
    }, [employee]);

    const name = currentEmployee && currentEmployee.name;
    const birthday = currentEmployee.birthday;
    const { values, setValues, handleChange, errors, isValid, resetForm } = useForm({ name: name, birthday: birthday });

     useEffect(() => {
        setValues({ name: name, birthday: birthday, role: currentEmployee.role, phone: '', isArchive: '', id: '' });
    }, [currentEmployee]);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('отправлено');
    }

    return (
        <section className={ styles.employeeDetails }>
            <form className={ styles.form } onSubmit={ handleSubmit }>
                <div className={ styles.formHeader }>
                    <h3 className={ styles.formTitle }>Данные сотрудника</h3>
                </div>
                <div className={ styles.inputGroup }>
                    <InputContainer labelFor='nameInput' inputId='nameInput' name='name' title='Имя сотрудника' values={values} handleChange={ handleChange } />
                    <InputContainer labelFor='birthday' inputId='birthday' name='birthday' title='Дата рождения' widthMask={ true } values={values} handleChange={ handleChange } />
                    <InputContainer labelFor='phone' inputId='phone' name='phone' title='Номер телефона' widthMask={ true } values={values} handleChange={ handleChange } />
                    <input placeholder='должность' />
                    <input placeholder='архив' />
                </div>
                <button type='submit'>сохранить</button>
            </form>
        </section>
    )
};

export default EmployeeForm;