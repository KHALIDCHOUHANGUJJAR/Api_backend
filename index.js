import express from "express";
import dotenv from "dotenv";
import ApiRouters from "./Routers/ApiRouters.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("Welcome to JsonApi");
});
app.use("/posts", ApiRouters);
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});
app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
