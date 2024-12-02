import express from "express";
import dotenv from "dotenv";
import ApiRouters from "./Routers/ApiRouters.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(cors())
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", ApiRouters);


app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
});
