const { movieNames } = require("../Data/movieData");

module.exports = {
    getAllMovies: function () {
        const movieDataList = movieNames;
        return movieDataList;
    }
}