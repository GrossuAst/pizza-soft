import styles from './dropdown.module.scss';
import { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';


const Dropdown = () => {
    const [isSelectorActive, setSelectorActive] = useState(false);

    const { employeesList, currentEmployee } = useSelector((store) => ({
        employeesList: store.employees.employees,
        currentEmployee: store.currentEmployee.employeeData
    }), shallowEqual);

    const roles = [...new Set(employeesList.map(item => item.role))];

    function handleSelectorButtonClick() {
        isSelectorActive && setSelectorActive(false);
        !isSelectorActive && setSelectorActive(true);
    };

    return (
        <div className={ styles.dropdownContainer }>
            <h3 className={ styles.dropdownTitle }>Должность:</h3>
            <div className={ styles.dropdown }>
                <div className={ styles.dropdownBtn } onClick={ handleSelectorButtonClick } >
                    { currentEmployee.role }
                    <div className={ !isSelectorActive ? styles.arrow : `${styles.arrow} ${styles.arrowOpened}` } />
                </div>
                <ul className={ styles.dropdownContent } style={ { display: isSelectorActive ? 'block' : 'none' } }>
                    {
                        roles.map((item, index) => (
                            <li key={ index } className={ styles.dropdownItem } 
                                // onClick={ () => changeRegion(item) }
                            >
                                <p  className={ styles.itemText } >
                                    { item }
                                </p>
                            </li>
                        ))
                    }
                </ul>    
            </div>
        </div>
    )
};

export default Dropdown;