import css from "../MoviesList/MoviesList.module.css";
import {PaginationItem, Pagination} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";


const PaginationMovies = ({page, setPage, path, total_pages}) => {


    return (
        <div className={css.pagination}>
            <Pagination
                count={total_pages > 500 ? 500 : total_pages}
                page={+page}
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
                sx={{marginY: 3, marginX: "auto"}}
                renderItem={(item) => (
                    //todo
                    <PaginationItem
                        component={NavLink}
                        to={`${path}${item.page}`}
                        {...item}
                    />
                )}
            />
        </div>
    );
};

export {PaginationMovies};


