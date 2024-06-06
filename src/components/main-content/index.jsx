import styles from './main-content.module.scss';

const MainContent = ({children}) => {
    return (
        <main className={ styles.main }>
            { children }
        </main>
    )
};

export default MainContent;