const express = require("express");

const buyerRouter = express.Router();

const { createBuyer } = require("../Controller/buyerController");

buyerRouter.route("/phone/:phoneID").post(createBuyer);

module.exports = buyerRouter;
