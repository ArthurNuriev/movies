import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreAnimationService = {
    getPage:(numOfPage)=> apiService.get(urls.getAnimationGenre(numOfPage))
}