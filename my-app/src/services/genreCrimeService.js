import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreCrimeService = {
    getPage:(numOfPage)=> apiService.get(urls.getCrimeGenre(numOfPage))
}