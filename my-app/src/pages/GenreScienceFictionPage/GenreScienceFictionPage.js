import React from 'react';
import {ActionList} from "../../components/GenreList/ActionList/ActionList";
import {ScienceFictionList} from "../../components/GenreList/ScienceFictionList/ScienceFictionList";

const GenreScienceFictionPage = () => {
    return (
        <div>
           <ScienceFictionList/>
        </div>
    );
};

export {GenreScienceFictionPage};