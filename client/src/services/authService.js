import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};



export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}user/register`, userData)

    if (res.statusText === 'OK') {
      toast.success("User Registered successfully");
    }

    return res.data;
  } catch (error) {
    const message = (error.response?.data?.message || error.message || error.toString());
    toast.error(message);
  }
}



export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${BACKEND_URL}user/login`, userData);
    if (res.statusText === "OK") {
      toast.success("Login Successful...");
    }
    return res.data;
  } catch (error) {
    const message = (error.response?.data?.message) || error.message || error.toString();
    toast.error(message);
  }
};


export const logoutUser = async () => {
  try {
    await axios.get(`${BACKEND_URL}user/logout`);
  } catch (error) {
    const message = (error.response?.data?.message) || error.message || error.toString();
    toast.error(message);
  }
};


export const getLoginStatus = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}user/loggedin`);
    return res.data;
  } catch (error) {
    const message = (error.response?.data?.message) || error.message || error.toString();
    toast.error(message);
  }
};