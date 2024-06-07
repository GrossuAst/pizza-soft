import styles from './add-employee-page.module.scss';
import Header from '../../components/header';
import MainContent from '../../components/main-content';
import EmployeeForm from '../../components/employee-form';

const AddEmployeePage = () => {
    return (
        <>
            <Header />
            <MainContent>
                <EmployeeForm />
            </MainContent>
        </>
    );
};

export default AddEmployeePage;