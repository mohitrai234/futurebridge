//  Init Lib
const express = require("express");
const cors = require('cors')
const { movieRouth } = require("./src/Navigation/movieRouth");

const app = express()

app.use(cors())
//  assign base route
app.get('/', (req, res) => {
    res.send("Server is running.");
})


app.use('/movie', movieRouth())

//  Assign port
app.listen(8090);