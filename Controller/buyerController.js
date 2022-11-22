const buyerModel = require("../Model/BuyerModel");

const phoneModel = require("../Model/phoneModel");

const createBuyer = async (req, res) => {
  try {
    const phone = await phoneModel.findById(req.params.phoneID);
    const commenter = new buyerModel(req.body);
    commenter.phone = phone;
    commenter.save();
    phone.commenters.push(commenter);
    phone.save();
    res.status(200).json({
      status: 200,
      data: commenter,
    });
  } catch (err) {
    res.status(500).json({
      messgae: err.messgae,
    });
  }
};

module.exports = { createBuyer };
