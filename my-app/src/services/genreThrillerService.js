import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreThrillerService = {
    getPage:(numOfPage)=> apiService.get(urls.getThrillerGenre(numOfPage))
}