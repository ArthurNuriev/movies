import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {apiService} from "../../services/apiService";
import {searchService} from "../../services/searchService";
import css from "../MoviesList/MoviesList.module.css";
import {PaginationMovies} from "../Pagination/PaginationMovies";
import {MoviesListCard} from "../MoviesList/MoviesListCard/MoviesListCard";
import {URLS} from "../../routing/URL";

const SearchMovie = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paramQuery = queryParams.get('query');
    const paramPage = queryParams.get('page');
    console.log(location)

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(paramPage)
    const [path] = useState(`${URLS.searchTitle}/movie?query=${paramQuery}&page=`);
    const [total_pages, setTotal_pages] = useState(500);


    useEffect(() => {
        searchService.getSearch(paramPage, paramQuery).then(({data}) => {
            setMovies(data.results)
            setTotal_pages(data.total_pages)
        })
    }, [paramQuery, paramPage]);

    return (

        <div className={css.MoviesList}>
            {
                <PaginationMovies page={page} setPage={setPage}  path={path} total_pages={total_pages}/>
            }
            {movies.map((value, index) => <MoviesListCard key={index} movie={value}/>)}

        </div>
    );
};

export {SearchMovie};