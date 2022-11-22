const express = require("express");

const router = express.Router();

const { createPhone, getPhone } = require("../Controller/phoneController");

router.route("/phone").post(createPhone);

router.route("/phone").get(getPhone);

module.exports = router;
