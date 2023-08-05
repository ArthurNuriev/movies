import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreScienceFictionService = {
    getPage:(numOfPage)=> apiService.get(urls.getScienceFictionGenre(numOfPage))
}