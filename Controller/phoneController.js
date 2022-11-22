const phoneModel = require("../Model/phoneModel");

const createPhone = async (req, res) => {
  try {
    const phone = await phoneModel.create(req.body);
    res.status(200).json({
      status: 200,
      data: phone,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

const getPhone = async (req, res) => {
  try {
    const phone = await phoneModel.find();
    res.status(200).json({
      status: 200,
      message: "data retrived successfully",
      data: phone,
    });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: err.message,
    });
  }
};

module.exports = { createPhone, getPhone };
