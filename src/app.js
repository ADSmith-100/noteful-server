require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const notesRouter = require("../Notes/notes-router");
//const usersRouter = require("./users/users-router");
//const commentsRouter = require("./comments/comments-router");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use("/api/notes", notesRouter);
//app.use("api/folders", foldersRouter);
//app.use("/api/users", usersRouter);
//app.use("/api/articles", articlesRouter);

//why was I not able to get this to work?
// app.get("/xss", (req, res) => {
//   res.cookie("secretToken", "1234567890");
//   res.sendFile(__dirname + "/xss-example.html");
// });

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (process.env.NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
