import styles from './main-menu.module.scss';

const MainMenu = () => {
    return (
        <>
            <section className={ styles.mainMenu }>
                <div className={ styles.projectDescription }>
                    <div className={ styles.imageStub } />
                    <p className={ styles.text }>
                        В этом приложении вам доступна возможность просматривать список сотрудников, 
                        добавлять новых и редактировать их данные.
                    </p>
                    <p className={ styles.text }>
                        При клике на карточку сотрудника вы попадете на страницу с возможностью редактировать его данные.
                    </p>
                    <p className={ styles.text }>
                        Также доступны фильтрация по должности и статусу, сортировка по имени и дате рождения.
                    </p>
                </div>
                {/* <Filter 
                    setRecipesToShow={ setRecipesToShow }
                    initialData={ initialData }
                    setCuisine={ setCuisine }
                    cuisine={ cuisine }
                    mealType={ mealType }
                    setMealType={ setMealType }
                    difficulty={ difficulty }
                    setDifficulty={ setDifficulty }
                    getRandomRecipe={ getRandomRecipe }
                /> */}
            </section>
        </>
    )
};

export default MainMenu;