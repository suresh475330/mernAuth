import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import avatarImg from '../../assets/homeDesign.png'

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

function NavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { user } = useSelector((state) => state.auth)
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = async () => {
        await logoutUser();
        await dispatch(SET_LOGIN(false));
        navigate("/login");
      };

    return (
        <AppBar component="nav">

            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component={NavLink}
                        to={"/"}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ChatZ
                    </Typography>

                    <Typography
                        variant="h5"
                        noWrap
                        component={NavLink}
                        to={"/"}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ChatZ
                    </Typography>
        

                    <Box sx={{ marginLeft: "auto" }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user?.name} src={user?.photo ? user.photo : avatarImg}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                                <MenuItem component={NavLink} to={"/dashboard"} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Dashboard</Typography>
                                </MenuItem>
                                <MenuItem component={NavLink} to={"/profile"} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;