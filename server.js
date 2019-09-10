const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");


//imporing files

const Config = require("./Config/DB");
const Routes = require('./Routes/index');
const router = require("express").Router()

const app = express()
const port = process.env.Port || 5000

//middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(morgan('dev'));

app.use('/user', Routes(router))


//Server Setup

const server = http.createServer(app)

server.listen(port)

server.on('listening', () => {
    console.log(`server running on port ${port}`)
    Config()
});

server.on('error', () => {
    console.log("An error occured")
})