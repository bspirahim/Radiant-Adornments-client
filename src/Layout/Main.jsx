import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../Shared/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;