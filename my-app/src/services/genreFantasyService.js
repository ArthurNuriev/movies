import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreFantasyService = {
    getPage:(numOfPage)=> apiService.get(urls.getFantasyGenre(numOfPage))
}