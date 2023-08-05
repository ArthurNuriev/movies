import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreActionService = {
    getPage:(numOfPage)=> apiService.get(urls.getActiveGenre(numOfPage))
}