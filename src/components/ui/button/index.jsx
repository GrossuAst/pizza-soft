import styles from './button.module.scss';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, name }) => {
    const navigate = useNavigate();
    const buttonClass = name === 'add-employee' ? styles.plus : name === 'edit-button' ? styles.edit : '';

    function handleButtonClick() {
        if(name === 'add-employee') {
            navigate('/add-employee')
        }
    };

    return (
        <button className={ styles.addButton } onClick={ () => handleButtonClick() }>
            <div className={ buttonClass }   />
            { text }
        </button>
    )
};

export default Button;