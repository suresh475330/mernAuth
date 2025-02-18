import React, { useState } from 'react';
import styles from './profile.module.css';
import profilePhoto from '../../assets/homeDesign.png'
import Spiner from "../../components/spiner/Spiner";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';


const EditProfile = () => {

    const [formData, setFormData] = useState({
        name: "suresh",
        email: "suresh033574@gmail.com",
        phone: "9514984910",
        bio: "some desc",
        photo: profilePhoto
    });

    const [isLoading, setIsLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        if (e.target.name === 'photo') {
            // Handle image preview when selecting a file
            const file = e.target.files[0];
            if (file) {
                setImagePreview(URL.createObjectURL(file));
                setFormData({...formData,[e.target.name] : file })
            }
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., update user data

        const profile = {
            name: formData.name,
            phone: formData.phone,
            bio: formData.bio,
            photo: formData.photo,
        };

        console.log(profile);
    };


    if (isLoading) return <Spiner />

    return (
        <Container component="main" maxWidth="sm" >
            <Paper className={styles.paper} elevation={3} >

                <Typography variant="h4" textAlign="center"> Edit User Profile</Typography>

                <div className={styles.profilePhoto}>
                    <img src={formData?.photo} alt="profilepic" />
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        disabled
                        value={formData.email}
                    />

                    <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        type='text'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        label="Bio"
                        name="bio"
                        type='text'
                        multiline
                        rows={4}
                        value={formData.bio}
                        onChange={handleChange}
                    />


                    <input
                        accept="image/*"
                        id="upload-file"
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        style={{ display: 'none' }}
                    />

                    <div className={styles.imagePreview}  >

                        <label htmlFor="upload-file">
                            <Button size="small" variant="outlined" component="span">
                                Upload Photo
                            </Button>
                        </label>
                        {imagePreview && (
                            <img
                                className={styles.media}
                                src={imagePreview}
                                alt="Preview"
                            />
                        )}
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: "10px" }}
                    >
                        Save Changes
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default EditProfile;
