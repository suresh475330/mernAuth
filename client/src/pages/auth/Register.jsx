import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './auth.module.css';
import { toast } from 'react-toastify';
import { validateEmail, registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { SET_LOGIN, SET_USER } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';

const initialState = {
    name: "",
    email: "",
    password: "",
    password2: "",
};

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const { name, email, password, password2 } = formData;


    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function hanldeSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !password2) {
            return toast.error("All fields are required");
        }
        if (password.length < 6) {
            return toast.error("Passwords must be up to 6 characters");
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email");
        }
        if (password !== password2) {
            return toast.error("Passwords do not match");
        }

        const userData = {
            name,
            email,
            password
        };

        setIsLoading(true);
        try {

            const data = await registerUser(userData);
            await dispatch(SET_LOGIN(true));
            await dispatch(SET_USER(data))
            console.log(data);
            navigate("/dashboard");
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }

    }

    if (isLoading) return <Loader />

    return (
        <div className={styles.main}>

            <section>

                <div className={styles.signin}>

                    <div className={styles.content}>

                        <h2>Register</h2>

                        <form className={styles.form} onSubmit={hanldeSubmit} >

                            <div className={styles.inputBox}>
                                <input type="text" required name='name' value={name} onChange={handleInputChange} />
                                <i>Name</i>
                            </div>

                            <div className={styles.inputBox}>
                                <input type="email" required name='email' value={email} onChange={handleInputChange} />
                                <i>Email</i>
                            </div>

                            <div className={styles.inputBox}>
                                <input type="password" required name='password' value={password} onChange={handleInputChange} />
                                <i>Password</i>
                            </div>

                            <div className={styles.inputBox}>
                                <input type="password" required name='password2' value={password2} onChange={handleInputChange} />
                                <i>Confirm Password</i>
                            </div>

                            <div className={styles.links}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/login">&nbsp; Already have an account? &nbsp;</NavLink>
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