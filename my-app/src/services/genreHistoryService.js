import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreHistoryService = {
    getPage:(numOfPage)=> apiService.get(urls.getHistoryGenre(numOfPage))
}