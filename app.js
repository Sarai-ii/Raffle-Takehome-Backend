const express = require('express');
const cors = require(`cors`)

const app = express();
//MIDDLEWARE
require("dotenv").config
app.use(cors());

// body parsing middleware to parse incoming request bodies else req.body is undefined
app.use(express.json())

//HEALTH CHECK
app.get("/", (req, res) => res.status(200).json({data: `Hello World`}))

module.exports = app;
