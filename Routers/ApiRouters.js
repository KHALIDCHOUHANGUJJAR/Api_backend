import express from "express";
import { posts } from "../ApiData/Post.js";
import { comments } from "../ApiData/comments.js";
import { album } from "../ApiData/album.js";
import { photo } from "../ApiData/photo.js";
import { user } from "../ApiData/user.js";
import { todos } from "../ApiData/todos.js";

const ApiRouters = express.Router();
ApiRouters.get("/posts", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: posts });
});

ApiRouters.get("/comments", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: comments });
});
ApiRouters.get("/album", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: album });
});
ApiRouters.get("/photo", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: photo });
});
ApiRouters.get("/todos", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: todos });
});
ApiRouters.get("/user", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: user });
});
export default ApiRouters;
