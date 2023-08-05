import React from 'react';
import css from './PosterPreview.module.css'

const PosterPreview = ({poster_path}) => {

    return (
        <>
            <img className={css.PosterPreview} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="img"/>
        </>
    );
};

export {PosterPreview};