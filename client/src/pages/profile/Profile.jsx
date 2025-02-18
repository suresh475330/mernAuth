import React from 'react';
import styles from './profile.module.css';
import imgPhoto from '../../assets/homeDesign.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import ChangePassword from '../../components/changePassword/ChangePassword';
import Spiner from '../../components/spiner/Spiner';

const userData = {
    name: "suresh",
    email: "suresh033574@gmail.com",
    phone: "9514984910",
    bio: "some desc",
    photo: imgPhoto
}


const Profile = () => {

    const [open, setOpen] = React.useState(false);
    const [loading, setLodaing] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    if(loading) return <Spiner />

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          
            <Card className={styles.card}>
                <CardContent>
                    {/* Title */}
                    <Typography variant="h4" style={styles.title}>
                        User Profile
                    </Typography>
                </CardContent>
                {/* User Image */}
                <CardContent>
                    <img
                        src={userData.photo}
                        alt="User"
                        className={styles.userImage}
                    />
                </CardContent>

                {/* User Information */}
                <CardContent className={styles.userInfo}>
                    <div>
                        <span className={styles.label}>Name:</span>
                        <Typography variant="body2" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
                            {userData.name}
                        </Typography>
                    </div>
                    <div>
                        <span className={styles.label}>Email:</span>
                        <Typography variant="body2" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
                            {userData.email}
                        </Typography>
                    </div>
                    <div>
                        <span className={styles.label}>Phone:</span>
                        <Typography variant="body2" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
                            {userData.phone}
                        </Typography>
                    </div>
                    <div>
                        <span className={styles.label}>Bio:</span>
                        <Typography variant="body2" sx={{ fontFamily: 'Arial', fontSize: '16px' }}>
                            {userData.bio}
                        </Typography>
                    </div>
                </CardContent>

                {/* Buttons */}
                <CardContent className={styles.buttons}>
                    <Button component={NavLink} to={"/editProfile"} variant="contained" color="primary" className={styles.button}>
                        Edit Profile
                    </Button>
                    <Button onClick={handleClickOpen} variant="contained" color="secondary" className={styles.button}>
                        Change Password
                    </Button>
                </CardContent>
            </Card>

            {/* Change password components */}
            <ChangePassword open={open} setOpen={setOpen} />
        </Box>
    );
};

export default Profile;
