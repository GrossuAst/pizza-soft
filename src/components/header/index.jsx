import styles from './header.module.scss';
import Arrow from '../../images/arrow.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

const Header = ({  }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const isAddEmployeePage = location.pathname === '/add-employee';

    const { currentEmployee } = useSelector((store) => ({
        currentEmployee: store.currentEmployee.employeeData,
    }), shallowEqual);
    
    function handleArrowClick() {
        navigate('/');
    };
    
    return (
        <header className={ styles.header }>
            {
                !isMainPage &&
                <img src={ Arrow } className={ styles.arrow }
                    onClick={ handleArrowClick }
                />
            }
            <h1 className={ styles.title }>
                {
                    isMainPage ? 'Список сотрудников' : 
                    isAddEmployeePage ? 'Добавить сотрудника в список' :
                    currentEmployee ? `${ currentEmployee.name }` : ''
                }
            </h1>
        </header>
    )
};

 export default Header;