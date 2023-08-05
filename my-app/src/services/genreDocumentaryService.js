import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreDocumentaryService = {
    getPage:(numOfPage)=> apiService.get(urls.getDocumentaryGenre(numOfPage))
}