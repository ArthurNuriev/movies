import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreWesternService = {
    getPage:(numOfPage)=> apiService.get(urls.getWesternGenre(numOfPage))
}