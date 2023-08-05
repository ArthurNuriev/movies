import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const searchService = {
    getSearch:(numOfPage,query)=> apiService.get(urls.getSearchMovie(numOfPage,query))
}