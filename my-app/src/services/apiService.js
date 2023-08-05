import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL,
    headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTlmZGVlNzZlMDhhMjhmN2RkN2I1OGZjNDAzYzk5NyIsInN1YiI6IjY0YzA2NzVhNTE0YzRhMDE0NDEyNTRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OlROp5Tz3M-mVNpvJGDBK1NRx8bgJqDwAmdxI20CdUg'},

})

export {apiService}