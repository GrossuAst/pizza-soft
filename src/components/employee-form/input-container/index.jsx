import styles from './input-container.module.scss';
import { IMaskInput } from 'react-imask';
import { useSelector, shallowEqual } from 'react-redux';

const InputContainer = ({ labelFor, inputId, widthMask = false, title, name, values, handleChange }) => {
    const { currentEmployee } = useSelector((store) => ({
        currentEmployee: store.currentEmployee.employeeData
    }), shallowEqual);

    let birthday = currentEmployee ? currentEmployee.birthday.replace(/\./g, "") : "";
    const phone = currentEmployee ? currentEmployee.phone : '';
    
    return (
        <div className={ styles.inputContainer }>
            <label htmlFor={ labelFor } className={ styles.label }>{ title }</label>
            { 
                widthMask ? 
                <IMaskInput 
                    className = { styles.input }
                    id = { inputId } lazy={ false }
                    mask = { inputId === 'birthday' ? Date : '+7 (000) 000-0000' }
                    min = { new Date(1900, 0, 1)} max={ new Date(2025, 0, 1) }
                    value={ inputId === 'birthday' ? values[name] || birthday : values[name] || phone }
                    name = { name }
                    required
                    onAccept={(value) => handleChange({ target: { name, value } })}
                /> : 
                <input 
                    id = { inputId } type='text' name = { name } placeholder='Введите имя' className = { styles.input } 
                    defaultValue = { currentEmployee && currentEmployee.name }
                    onChange={ handleChange }
                />
            }
            <p className={ styles.errorMessage }>ошибка</p>
        </div>
    )
};

export default InputContainer;