import React, {useEffect, useState} from 'react';
import {moviesService} from "../../services/moviesService";
import {MoviesListCard} from "./MoviesListCard/MoviesListCard";
import {useParams} from "react-router-dom";
import css from './MoviesList.module.css'
import {PaginationMovies} from "../Pagination/PaginationMovies";
import {URLS} from "../../routing/URL";

const MoviesList = () => {


    const numOfPage = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(numOfPage.page);
    const [path] = useState(URLS.movies);
    const [total_pages, setTotal_pages] = useState(500);


    useEffect(() => {
        moviesService.getPage(numOfPage.page).then(({data}) => {
            setMovies(data.results)
            setTotal_pages(data.total_pages)
        })
    }, [numOfPage.page])

    return (
        <div className={css.MoviesList}>
            {
                <PaginationMovies page={page} setPage={setPage}  path={path} total_pages={total_pages}/>
            }
            {movies.map((value, index) => <MoviesListCard key={index} movie={value}/>)}

        </div>
    );
};

export {MoviesList};

