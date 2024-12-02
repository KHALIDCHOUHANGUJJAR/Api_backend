import express from "express";
import { posts } from "../ApiData/Post.js";
import { comments } from "../ApiData/comments.js";

const ApiRouters = express.Router();
ApiRouters.get("/", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: posts });
});

ApiRouters.get("/comments",(req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: comments });
})
export default ApiRouters;