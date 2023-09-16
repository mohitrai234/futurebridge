//  init Lib
const express = require("express");
const { sendSuccessResponse, sendErrorResponse } = require("../Common/common");
const { movieNames } = require("../Data/movieData");
const { getAllMovies } = require("../Controller/movieController");

const route = express.Router();


module.exports.movieRouth = function () {
    // set Get All Moview Route
    route.get('/getAllMovies', (req, res) => {
        const movieData = getAllMovies()
        if (movieData.length > 0) {
            // Return for successfull Data Fetched
            res.send(sendSuccessResponse(200, "", movieData))
        } else {
            // Return for No Data Fetched
            res.send(sendErrorResponse(400, "No Result Found!.", []))
        }
    })
    return route;
}