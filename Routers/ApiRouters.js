import express from "express";
import { posts } from "../ApiData/Post.js";

const ApiRouters = express.Router();
ApiRouters.get("/", (req, res) => {
  res.status(200).send({ status: 200, message: "Scuess", data: posts });
});

export default ApiRouters;