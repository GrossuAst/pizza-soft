import styles from './home.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import MainContent from '../../components/main-content';
import MainMenu from '../../components/main-menu';
import EmployeeList from '../../components/employee-list';

const Home = () => {
    return (
        <>
            <Header />
            <MainContent>
                <MainMenu />
                <EmployeeList />
            </MainContent>
            {/* <Outlet /> */}
        </>
    )
};

export default Home;