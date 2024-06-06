import styles from './header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import Arrow from '../../images/arrow.svg';

const Header = ({  }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const isEmployeePage = location.pathname !== '/';

    function handleArrowClick() {
        navigate('/');
    };
    
    return (
        <header className={ styles.header }>
            {
                isEmployeePage &&
                <img src={ Arrow } className={ styles.arrow }
                    onClick={ handleArrowClick }
                />
            }
            <h1 className={ styles.title }>
                {
                    isMainPage ? 'Список сотрудников' : 'Имя сотрудника'
                }
            </h1>
        </header>
    )
};

 export default Header;