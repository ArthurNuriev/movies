import React from 'react';
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StarsRating} from "../../StarsRating/StarsRating";



const MoviesListCard = ({movie}) => {

    const {poster_path, title, overview, vote_average} = movie;

    return (
        <div className={css.movie}>
            <PosterPreview poster_path={poster_path}/>
            <span className={css.title}>{title}</span>
            <span className={css.overview}>{overview}</span>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {MoviesListCard};