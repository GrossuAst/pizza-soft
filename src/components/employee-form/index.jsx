import styles from './employee-form.module.scss';

const EmployeeForm = () => {
    return (
        <section className={ styles.employeeDetails }>
            <form className={ styles.form }>
                <div className={ styles.formHeader }>
                    <h3>Данные сотрудника</h3>
                </div>
                <div className={ styles.inputGroup }>
                    <input type='text' name='name' placeholder='Имя' />
                    <input type='text' name='name' placeholder='Фамилия' />
                    <input type='text' name='phone' placeholder='Номер телефона' />    
                </div>
            </form>
        </section>
    )
};

export default EmployeeForm;