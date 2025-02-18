import styles from './auth.module.css';
import { NavLink ,useParams} from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const initialState = {
    password: "",
    password2: "",
};

export default function Reset() {


    const [formData, setFormData] = useState(initialState);
    const { password, password2 } = formData;
    const { resetToken } = useParams();

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function hanldeSubmit(e) {
        e.preventDefault();


        if (password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
        }
        if (password !== password2) {
            return toast.error("Passwords do not match");
        }

        const userData = {
            password,
            password2,
            resetToken
        };

        console.log(userData);

        // Send data

    }


    return (
        <div className={styles.main}>


            <section>

                <div className={styles.signin}>

                    <div className={styles.content}>

                        <h2>Reset Password</h2>

                        <form className={styles.form} onSubmit={hanldeSubmit}>


                            <div className={styles.inputBox}>
                                <input type="password" required name='password' value={password} onChange={handleInputChange} />
                                <i>Password</i>
                            </div>
                            <div className={styles.inputBox}>
                                <input type="password" required name='password2' value={password2} onChange={handleInputChange} />
                                <i>Confirm New Password</i>
                            </div>

                            <div className={styles.links}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </div>

                            <div className={styles.inputBox}>
                                <input type="submit" value={"Submit"} />
                            </div>

                        </form>

                    </div>

                </div>

            </section>
        </div>
    )
}