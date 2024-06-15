import styles from './employee-page.module.scss';
import MainContent from '../../components/main-content';
import EmployeeForm from '../../components/employee-form';
import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getInitialData } from '../../services/employees/action';

const EmployeePage = () => {
    const dispatch = useDispatch();

    const { employeesList } = useSelector((store) => ({
        employeesList: store.employees.employees,
    }), shallowEqual);

    useEffect(() => {
        if(employeesList.length === 0) {
            dispatch(getInitialData());
        }
    }, []);
    
    return (
        <EmployeeForm />
    )
};

export default EmployeePage;