import styles from './employee-card.module.scss';
import AvatarStub from '../../images/avatar-stub.png';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ name, birthday, phone, role, isArchive, id }) => {
    const translatedRole = role === 'driver' ? 'водитель' : role === 'waiter' ? 'официант' : role === 'cook' ? 'повар' : '';

    return (
        <Link to={`/${id}`} className={ styles.link }>
            <article className={ styles.card }>
                <div className={ styles.container }>
                    <h4 className={ styles.name }>
                        { name }
                    </h4>
                    <div className={ styles.imageContainer }>
                        <img src={ AvatarStub } className={ styles.photo } alt='Аватар' />   
                        <div className={ styles.number }>{ id }</div> 
                    </div>
                </div>
                <div className={ styles.infoContainer }>
                    <h4 className={ styles.title }>
                        Дата рождения:
                        <span className={ styles.info }>{ birthday }</span>
                    </h4>
                    <h4 className={ styles.title }>
                        Номер телефона:
                        <span className={ styles.info }>{ phone }</span>
                    </h4>
                    <h4 className={ styles.title }>
                        Должность: 
                        <span className={ styles.info }>{ translatedRole }</span>
                    </h4>
                    {
                        isArchive && <h5 className={ styles.archive }>В архиве</h5>
                    }
                </div>
            </article>
        </Link>
    )
};

export default EmployeeCard;