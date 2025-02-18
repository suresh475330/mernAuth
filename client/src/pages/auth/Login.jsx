import styles from './auth.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { useDispatch } from 'react-redux';
import { SET_LOGIN,SET_USER } from '../../redux/features/auth/authSlice';
import { loginUser } from '../../services/authService';

const initialState = {
    email: "",
    password: "",
};

export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const { email, password } = formData;


    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function hanldeSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            return toast.error("All fields are required");
        }
        if (password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }

        const userData = {
            email,
            password
        };

        setIsLoading(true);
        try {

            const data = await loginUser(userData);
            console.log(data);
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_USER(data));
            navigate("/dashboard");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }

    }

    if(isLoading) return <Loader />

    return (
        <div className={styles.main}>


            <section>

                <div className={styles.signin}>

                    <div className={styles.content}>

                        <h2>Login</h2>

                        <form className={styles.form} onSubmit={hanldeSubmit}>

                        <div className={styles.inputBox}>
                                <input type="email" required name='email' value={email} onChange={handleInputChange} />
                                <i>Email</i>
                            </div>

                            <div className={styles.inputBox}>
                                <input type="password" required name='password' value={password} onChange={handleInputChange} />
                                <i>Password</i>
                            </div>

                            <div className={styles.links}>
                                <NavLink to="/forgot">Forgot Password</NavLink>
                                <NavLink to="/register">Register</NavLink>
                            </div>

                            <div className={styles.inputBox}>
                                <input type="submit" value={isLoading ? "Submiting..." : "Submit"} />
                            </div>

                        </form>

                    </div>

                </div>

            </section>
        </div>
    )
}