import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreComedyService = {
    getPage:(numOfPage)=> apiService.get(urls.getComedyGenre(numOfPage))
}