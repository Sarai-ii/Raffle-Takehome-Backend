const express = require('express');
const cors = require(`cors`)

const app = express();
//MIDDLEWARE
require("dotenv").config
app.use(cors());
//parse incoming requests
app.use(express.json())

//HEALTH CHECK
app.get("/", (req, res) => res.status(200).json({data: `Hello World`}))

module.exports = app;
