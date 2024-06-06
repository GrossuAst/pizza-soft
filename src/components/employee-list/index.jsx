import styles from './employee-list.module.scss';
import initialData from '../../utils/employees.json';
import EmployeeCard from '../employee-card';
import { getData } from '../../utils/fake-api';

const EmployeeList = () => {
    getData().then((res) => {console.log(res)}).catch((err) => {console.log(err)})

    return (
        <section className={ styles.content }>
            <div className={ styles.contentHeader }>
                <h2 className={ styles.contentTitle }>
                    Найденные сотрудники
                    <span className={ styles.number }>{ 16 }</span>
                </h2>    
            </div>
            <ul className={ styles.list }>
                {
                    initialData.map((item, index) => (
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