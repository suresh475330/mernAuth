import {createSlice} from '@reduxjs/toolkit';

const photo = JSON.parse(window.localStorage.getItem("photo"));

const initialState = {
    isLoggedIn : false,
    user : {
        name: "",
        email: "",
        phone: photo ? photo : "",
        bio: "",
        photo: "",
    }
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        SET_LOGIN(state,action){
            state.isLoggedIn = action.payload;
        },
        SET_USER(state,action){
            const profile = action.payload;
            state.user.name = profile.name;
            state.user.email = profile.email;
            state.user.phone = profile.phone;
            state.user.bio = profile.bio;
            state.user.photo = profile.photo;

            window.localStorage.setItem("photo",profile.photo)
        }
    }
})


export const {SET_LOGIN,SET_USER} = authSlice.actions;

export default authSlice.reducer;