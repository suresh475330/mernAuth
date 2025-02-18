import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';
import Reset from './pages/auth/Reset';
import Dashboard from './pages/dashboard/DashBoard';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/profile/EditProfile';
import NotFound from './pages/notFound/NotFound';
import Layout from './components/layout/Layout';
import RequireAuth from './utils/RequireAuth';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {


  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetpassword/:resetToken" element={<Reset />} />

          {/* Protocted routes */}
          <Route element={<RequireAuth />}>

            <Route path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              } />

            <Route path="/profile"
              element={
                <Layout>
                  <Profile />
                </Layout>
              } />
            <Route path="/editProfile"
              element={
                <Layout>
                  <EditProfile />
                </Layout>
              } />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
