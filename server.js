const express = require("express");

const mongoose = require("mongoose");
const buyerRouter = require("./Router/buyerRouter");

const router = require("./Router/phoneRouter");

const port = 4000;

const url = "mongodb://localhost/Practice02DB";

mongoose
  .connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB is connnected to server");
  })
  .catch((err) => console.log(err.message));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API is getting on route /");
});

app.use("/api", router);

app.use("/api", buyerRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
