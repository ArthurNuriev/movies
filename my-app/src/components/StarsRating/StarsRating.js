
import StarRatings from "react-star-ratings/build/star-ratings";
import React from 'react';
import css from './StarsRating.module.css'

const StarsRating = ({vote_average}) => {
    return (
        <div className={css.StarsRating}>
            <StarRatings
                rating={vote_average/2}
                starDimension="20px"
                starRatedColor="gold"
                starSpacing="5px"
                numberOfStars={5}
            />
        </div>
    );
};

export {StarsRating};