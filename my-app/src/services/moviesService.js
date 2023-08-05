import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const moviesService = {
    getPage:(numOfPage)=> apiService.get(urls.movies(numOfPage))
}