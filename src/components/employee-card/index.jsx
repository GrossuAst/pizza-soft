import styles from './employee-card.module.scss';
import AvatarStub from '../../images/avatar-stub.png';

const EmployeeCard = ({ name, birthday, phone, role, isArchive }) => {
    const translatedRole = role === 'driver' ? 'водитель' : role === 'waiter' ? 'официант' : role === 'cook' ? 'повар' : '';

    return (
        <article className={ styles.card }>
            <div className={ styles.container }>
                <h4 className={ styles.name }>
                    { name }
                </h4>
                <img src={ AvatarStub } className={ styles.photo } alt='Аватар' />
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
            </div>
        </article>
    )
};

export default EmployeeCard;