import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreTVMovieService = {
    getPage:(numOfPage)=> apiService.get(urls.getTvMovieGenre(numOfPage))
}