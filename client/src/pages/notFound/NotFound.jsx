import styles from './NotFound.module.css';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function NotFound() {

    return (
        <div className={styles.errorPage}>
            <h1>Oops!</h1>
            <p >Sorry, an unexpected error has occurred.</p>
            <p className={styles.msg}>Not Found</p>

            <Button component={NavLink} color='secondary' to={"/"} variant="contained" >
                Go Home
            </Button>
        </div>
    )
}