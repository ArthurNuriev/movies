import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreAdventureService = {
    getPage:(numOfPage)=> apiService.get(urls.getAdventureGenre(numOfPage))
}