import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreWarService = {
    getPage:(numOfPage)=> apiService.get(urls.getWarGenre(numOfPage))
}