import styles from './home.module.scss';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header';
import MainContent from '../../components/main-content';
import MainMenu from '../../components/main-menu';
import EmployeeList from '../../components/employee-list';

const Home = () => {
    const location = useLocation();
    const mainPage = location.pathname === '/';

    return (
        <>
            <Header />
            <MainContent>
                {
                    mainPage ?
                    ( 
                        <>
                            <MainMenu />
                            <EmployeeList />
                        </>
                    ) : 
                    <Outlet/>
                }
            </MainContent>
        </>
    )
};

export default Home;