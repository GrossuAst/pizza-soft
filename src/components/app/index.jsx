import styles from './app.module.scss';
import { Routes, Route } from "react-router-dom";
import EmployeePage from "../../pages/employee-page";
import Home from "../../pages/home";
import AddEmployeePage from '../../pages/add-employee-page';

const App = () => {
  return (
    <div className={ styles.wrapper }>
      <Routes>
        
        <Route path="/" element={<Home />}>
          <Route path=":id" element={ <EmployeePage /> } />
        </Route>

        <Route path='/add-employee' element={ <AddEmployeePage /> } />

        <Route path="*" element={<p>qwer</p>} />

      </Routes>
    </div>
  );
}

export default App;