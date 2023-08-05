import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreMysteryService = {
    getPage:(numOfPage)=> apiService.get(urls.getMysteryGenre(numOfPage))
}