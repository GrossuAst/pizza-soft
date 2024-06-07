import styles from './header.module.scss';
import Arrow from '../../images/arrow.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';
import { useMemo } from 'react';

const Header = ({  }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const isMainPage = location.pathname === '/';
    const isAddEmployeePage = location.pathname === '/add-employee';
    const isEmployeePage = location.pathname !== '/';

    const { employeesList, isInitialDataLoading } = useSelector((store) => ({
        employeesList: store.employees.employees,
        isInitialDataLoading: store.employees.feedRequest
    }), shallowEqual);

    const employee = employeesList.find((emp) => emp.id === Number(id));
    
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
                    employee ? `${ employee.name }` : ''
                }
            </h1>
        </header>
    )
};

 export default Header;