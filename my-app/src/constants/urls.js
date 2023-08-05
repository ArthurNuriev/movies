const baseURL = "https://api.themoviedb.org/3";


const urls = {
    movies: (numOfPage)=> `/discover/movie?page=${numOfPage}`,

    getSearchMovie:(numOfPage, query)=> `/search/movie?query=${query}&page=${numOfPage}`,

    getActiveGenre: (numOfPage) => `discover/movie?with_genres=28&page=${numOfPage}`,
    getAdventureGenre: (numOfPage) => `discover/movie?with_genres=12&page=${numOfPage}`,
    getAnimationGenre: (numOfPage) => `discover/movie?with_genres=16&page=${numOfPage}`,
    getComedyGenre: (numOfPage) => `discover/movie?with_genres=35&page=${numOfPage}`,
    getCrimeGenre: (numOfPage) => `discover/movie?with_genres=80&page=${numOfPage}`,
    getDocumentaryGenre: (numOfPage) => `discover/movie?with_genres=99&page=${numOfPage}`,
    getDramaGenre: (numOfPage) => `discover/movie?with_genres=18&page=${numOfPage}`,
    getFamilyGenre: (numOfPage) => `discover/movie?with_genres=10751&page=${numOfPage}`,
    getFantasyGenre: (numOfPage) => `discover/movie?with_genres=14&page=${numOfPage}`,
    getHistoryGenre: (numOfPage) => `discover/movie?with_genres=36&page=${numOfPage}`,
    getHorrorGenre: (numOfPage) => `discover/movie?with_genres=27&page=${numOfPage}`,
    getMusicGenre: (numOfPage) => `discover/movie?with_genres=10402&page=${numOfPage}`,
    getMysteryGenre: (numOfPage) => `discover/movie?with_genres=9648&page=${numOfPage}`,
    getRomanceGenre: (numOfPage) => `discover/movie?with_genres=10749&page=${numOfPage}`,
    getScienceFictionGenre: (numOfPage) => `discover/movie?with_genres=878&page=${numOfPage}`,
    getTvMovieGenre: (numOfPage) => `discover/movie?with_genres=10770&page=${numOfPage}`,
    getThrillerGenre: (numOfPage) => `discover/movie?with_genres=53&page=${numOfPage}`,
    getWarGenre: (numOfPage) => `discover/movie?with_genres=10752&page=${numOfPage}`,
    getWesternGenre: (numOfPage) => `discover/movie?with_genres=37&page=${numOfPage}`
}

export {
    baseURL,
    urls
}