import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreDramaService = {
    getPage:(numOfPage)=> apiService.get(urls.getDramaGenre(numOfPage))
}