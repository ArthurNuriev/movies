import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreFamilyService = {
    getPage:(numOfPage)=> apiService.get(urls.getFamilyGenre(numOfPage))
}