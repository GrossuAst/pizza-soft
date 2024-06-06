import styles from './employee-list.module.scss';
import EmployeeCard from '../employee-card';
import Preloader from '../preloader';
import { getInitialData } from '../../services/employees/action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual } from "react-redux";

const EmployeeList = () => {
    const dispatch = useDispatch();

    const { employeesList, isInitialDataLoading } = useSelector((store) => ({
        employeesList: store.employees.employees,
        isInitialDataLoading: store.employees.feedRequest
    }), shallowEqual);

    useEffect(() => {
        dispatch(getInitialData());
    }, []);

    return (
        <section className={ styles.content }>
            <div className={ styles.contentHeader }>
                <h2 className={ styles.contentTitle }>
                    Найденные сотрудники
                    <span className={ styles.number }>{ 16 }</span>
                </h2>
                <button type='button' className={ styles.addButton }>
                    <div className={ styles.plus } />
                    Добавить сотрудника
                </button>
            </div>
            <ul className={ styles.list }>
                {
                    isInitialDataLoading ? <Preloader /> :
                    employeesList && employeesList.map((item, index) => (
                        <li key={ item.id } className={ styles.listItem }>
                            <EmployeeCard 
                                name={ item.name }
                                birthday={ item.birthday }
                                phone={ item.phone }
                                role={ item.role }
                                isArchive={ item.isArchive }
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
};

export default EmployeeList;