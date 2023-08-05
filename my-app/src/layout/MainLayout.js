import React from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div className={css.wrapper}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};