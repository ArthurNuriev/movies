import React from 'react';
import css from './Header.module.css'
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import {useNavigate} from "react-router-dom";
import {SearchForm} from "../SearchForm/SearchForm";

const Header = () => {

    const navigate = useNavigate();

    return (
        <div className={css.navbar}>
            <div className={css.inner}>
                <div className={css.icon}><MovieOutlinedIcon fontSize="large" onClick={()=>navigate('movies/page/1')}/></div>
                <div><DropdownMenu/></div>
                <SearchForm/>
            </div>
        </div>
    );
};

export {Header};
