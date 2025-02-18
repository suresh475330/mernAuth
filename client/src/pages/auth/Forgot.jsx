import styles from './auth.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail } from '../../services/authService';



export default function Forgot() {

    const [email, setEmail] = useState("");

    async function hanldeSubmit(e) {
        e.preventDefault();

        if (!email) {
            return toast.error("Plz enter an email");
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }

        const userData = {
            email,
        };

        console.log(userData);
        
        // sent email
        setEmail("");

    }

    return (
        <div className={styles.main}>


            <section>

                <div className={styles.signin}>

                    <div className={styles.content}>

                        <h2>Forgot Password</h2>

                        <form className={styles.form} onSubmit={hanldeSubmit}>

                            <div className={styles.inputBox}>
                                <input type="email" required name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <i>Email</i>
                            </div>


                            <div className={styles.links}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </div>

                            <div className={styles.inputBox}>
                                <input type="submit" value={"Get Reset Email"} />
                            </div>

                        </form>

                    </div>

                </div>

            </section>
        </div>
    )
}