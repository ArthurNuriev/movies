import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreRomanceService = {
    getPage:(numOfPage)=> apiService.get(urls.getRomanceGenre(numOfPage))
}