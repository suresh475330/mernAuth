import styles from './home.module.css';
import { NavLink } from 'react-router-dom';
import HomeDesign from '../../assets/homeDesign6.jpg'
import { ShowOnLogin, ShowOnLogout } from '../../utils/HiddenLink';


const Home = () => {

    const year = new Date().getFullYear();
    return (
        <div className={styles.containerStyle}>
            <header className={styles.headerStyle}>
                <NavLink to={"/"}>
                    <div className="logo">ChatZ</div>
                </NavLink>
                <div className={styles.authLinksStyle}>

                    <ShowOnLogout>
                        <NavLink to={"/register"}>
                            Register
                        </NavLink>
                    </ShowOnLogout>

                    <ShowOnLogout>
                        <NavLink to={"/login"}>
                            Login
                        </NavLink>
                    </ShowOnLogout>

                    <ShowOnLogin>

                        <NavLink to={"/dashboard"}>
                            DashBoard
                        </NavLink>
                    </ShowOnLogin>

                </div>
            </header>
            <main className={styles.mainStyle}>
                <div className={styles.contentContainer}>
                    <img src={HomeDesign} width={600} alt="Image" className={styles.homeDesignImg} />
                    <div className={styles.contentStyle}>
                        <h1>Welcome to ChatZ Website</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro ex maxime quidem! Cumque ut corporis nulla sunt repudiandae non!</p>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                &copy; {year} ChatZ. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;



