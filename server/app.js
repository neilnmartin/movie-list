const express = require("express");
const path = require("path");
const parser = require("body-parser");
const morgan = require("morgan");

const router = require("./routes");
const db = require("../db/sequelize_index");

// Attempt to use pool:
// const db = require("../db/poolindex");
// db(() => console.log("connected to db"));
// Using sequelize:

const app = express();

app.use(morgan("dev"));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist/")));

app.use("/api", router);

module.exports = app;
