import React from 'react'
import { useState } from "react"
import {toast} from 'react-toastify';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from "@mui/material/InputLabel";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const initialState = {
    oldPassword: "",
    password: "",
    password2: "",
};

function ChangePassword({ open, setOpen }) {

    const [formData, setformData] = useState(initialState);
    const { oldPassword, password, password2 } = formData;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const handleClose = () => {
        setformData({
            oldPassword: "",
            password: "",
            password2: ""
        })
        setOpen(false);
    };


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const changePass = async (e) => {
        e.preventDefault();

        if (password !== password2) {
            return toast.error("New passwords do not match");
        }

        const formData = {
            oldPassword,
            password,
        };

        console.log(formData);
        handleClose();

        // const data = await changePassword(formData);
        // toast.success(data);
        // navigate("/profile");
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Password Change Form</DialogTitle>
                <DialogContent>
                    <div>
                        <form onSubmit={changePass} style={{display : "flex", flexDirection : "column" , gap : "10px"}}>
                            <FormControl variant="filled">
                                <InputLabel htmlFor="old-password">Old Password</InputLabel>
                                <FilledInput
                                    id="old-password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    name="oldPassword"
                                    value={oldPassword}
                                    onChange={handleInputChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl variant="filled">
                                <InputLabel htmlFor="new-password">New Password</InputLabel>
                                <FilledInput
                                    id="new-password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    name="password"
                                    value={password}
                                    onChange={handleInputChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl variant="filled">
                                <InputLabel htmlFor="new-password-2">Confirm New Password</InputLabel>
                                <FilledInput
                                    id="new-password-2"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    name="password2"
                                    value={password2}
                                    onChange={handleInputChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <DialogActions>
                                <Button type="reset" onClick={handleClose}>Cancel</Button>
                                <Button type="submit" >Change Password</Button>
                            </DialogActions>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ChangePassword;