import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreHorrorService = {
    getPage:(numOfPage)=> apiService.get(urls.getHorrorGenre(numOfPage))
}