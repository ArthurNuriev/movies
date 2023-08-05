import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "../layout/MainLayout";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";
import {GenreActionPage} from "../pages/GenreActionPage/GenreActionPage";
import {URLS} from "./URL";
import {GenreAdventurePage} from "../pages/GenreAdventurePage/GenreAdventurePage";
import {GenreAnimationPage} from "../pages/GenreAnimationPage/GenreAnimationPage";
import {GenreComedyPage} from "../pages/GenreComedyPage/GenreComedyPage";
import {GenreCrimePage} from "../pages/GenreCrimePage/GenreCrimePage";
import {GenreDocumentaryPage} from "../pages/GenreDocumentaryPage/GenreDocumentaryPage";
import {GenreDramaPage} from "../pages/GenreDramaPage/GenreDramaPage";
import {GenreFamilyPage} from "../pages/GenreFamilyPage/GenreFamilyPage";
import {GenreFantasyPage} from "../pages/GenreFantasyPage/GenreFantasyPage";
import {GenreHistoryPage} from "../pages/GenreHistoryPage/GenreHistoryPage";
import {GenreHorrorPage} from "../pages/GenreHorrorPage/GenreHorrorPage";
import {GenreMusicPage} from "../pages/GenreMusicPage/GenreMusicPage";
import {GenreMysteryPage} from "../pages/GenreMysteryPage/GenreMysteryPage";
import {GenreRomancePage} from "../pages/GenreRomancePage/GenreRomancePage";
import {GenreScienceFictionPage} from "../pages/GenreScienceFictionPage/GenreScienceFictionPage";
import {GenreTvMoviePage} from "../pages/GenreTvMoviePage/GenreTvMoviePage";
import {GenreThrillerPage} from "../pages/GenreThrillerPage/GenreThrillerPage";
import {GenreWarPage} from "../pages/GenreWarPage/GenreWarPage";
import {GenreWesternPage} from "../pages/GenreWesternPage/GenreWesternPage";
import {SearchMoviePage} from "../pages/SearchMoviePage/SearchMoviePage";


const router = createBrowserRouter([

    {
        path: '',
        element: <MainLayout/>,
        children:[
            {
                index: true,
                element: <Navigate to={'movies/page/1'}/>

            },
            {
                path: `${URLS.movies}:page`,
                element: <MoviesPage/>
            },
            {
                path: `${URLS.searchTitle}/:movie`,
                element: <SearchMoviePage/>
            },
            {
                path: `${URLS.genreAction}:page`,
                element: <GenreActionPage/>
            },
            {
                path: `${URLS.genreAdventure}:page`,
                element: <GenreAdventurePage/>
            },
            {
                path: `${URLS.genreAnimation}:page`,
                element: <GenreAnimationPage/>
            },
            {
                path: `${URLS.genreComedy}:page`,
                element: <GenreComedyPage/>
            },
            {
                path: `${URLS.genreCrime}:page`,
                element: <GenreCrimePage/>
            },
            {
                path: `${URLS.genreDocumentary}:page`,
                element: <GenreDocumentaryPage/>
            },
            {
                path: `${URLS.genreDrama}:page`,
                element: <GenreDramaPage/>
            },
            {
                path: `${URLS.genreFamily}:page`,
                element: <GenreFamilyPage/>
            },
            {
                path: `${URLS.genreFantasy}:page`,
                element: <GenreFantasyPage/>
            },
            {
                path: `${URLS.genreHistory}:page`,
                element: <GenreHistoryPage/>
            },
            {
                path: `${URLS.genreHorror}:page`,
                element: <GenreHorrorPage/>
            },
            {
                path: `${URLS.genreMusic}:page`,
                element: <GenreMusicPage/>
            },
            {
                path: `${URLS.genreMystery}:page`,
                element: <GenreMysteryPage/>
            },
            {
                path: `${URLS.genreRomance}:page`,
                element: <GenreRomancePage/>
            },
            {
                path: `${URLS.genreScienceFiction}:page`,
                element: <GenreScienceFictionPage/>
            },
            {
                path: `${URLS.genreTvMovie}:page`,
                element: <GenreTvMoviePage/>
            },
            {
                path: `${URLS.genreThriller}:page`,
                element: <GenreThrillerPage/>
            },
            {
                path: `${URLS.genreWar}:page`,
                element: <GenreWarPage/>
            },
            {
                path: `${URLS.genreWestern}:page`,
                element: <GenreWesternPage/>
            },



        ]
    }

]);

export {router}