import {apiService} from "./apiService";
import {urls} from "../constants/urls";

export const genreMusicService = {
    getPage:(numOfPage)=> apiService.get(urls.getMusicGenre(numOfPage))
}