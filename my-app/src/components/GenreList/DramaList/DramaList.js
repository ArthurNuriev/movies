import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from "../../MoviesList/MoviesList.module.css";
import {PaginationMovies} from "../../Pagination/PaginationMovies";
import {MoviesListCard} from "../../MoviesList/MoviesListCard/MoviesListCard";
import {URLS} from "../../../routing/URL";
import {genreDramaService} from "../../../services/genreDramaService";


const DramaList = () => {

    const numOfPage = useParams();
    const [movies, setMovies] = useState([]);
    const [path] = useState(URLS.genreDrama);
    const [page, setPage] = useState(numOfPage.page);
    const [total_pages, setTotal_pages] = useState(500);

    useEffect(() => {
        genreDramaService.getPage(numOfPage.page).then(({data}) => {
            setMovies(data.results)
            setTotal_pages(data.total_pages)
        })
    }, [numOfPage.page])

    return (
        <div className={css.MoviesList}>
            {<PaginationMovies page={page} setPage={setPage} path={path} total_pages={total_pages}/>}
            {movies.map((value, index) => <MoviesListCard key={index} movie={value}/>)}

        </div>
    );
};

export {DramaList};