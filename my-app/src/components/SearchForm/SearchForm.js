import React, {useEffect} from 'react';
import {Button, TextField} from "@mui/material";
import css from './SearchForm.module.css'
import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";
import {URLS} from "../../routing/URL";

const SearchForm = () => {

    const {register,
        handleSubmit,
        reset,
    formState:{errors,isValid}, setValue} = useForm();

    const navigate = useNavigate();

    const searchMovie = (data) => {
        // console.log(data)
        navigate(`${URLS.searchTitle}/movie?query=${data.search}&page=1`)
        reset()
    };


    return (
        <>
            <form onSubmit={handleSubmit(searchMovie)} className={css.form}>

               <TextField type={'text'} {...register("search")} label="movie title..." size="small"/>
                <Button type={'submit'} >Search</Button>

            </form>

        </>
    );
};

export {SearchForm};