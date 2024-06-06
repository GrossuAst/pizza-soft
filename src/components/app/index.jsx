import styles from './app.module.scss';
import { Routes, Route } from "react-router-dom";
import EmployeePage from "../../pages/employee-page";
import Home from "../../pages/home";

const App = () => {
  return (
    <div className={ styles.wrapper }>
      <Routes>
        
        <Route path="/" element={<Home />}>
          <Route path=":id" element={ <EmployeePage /> } />
        </Route>

        <Route path="*" element={<p>qwer</p>} />

      </Routes>
    </div>
  );
}

export default App;