const mongoose = require("mongoose");

const phoneSchema = mongoose.Schema(
  {
    phoneName: {
      type: String,
      required: true,
    },
    phoneBrand: {
      type: String,
      required: true,
    },
    sellerName: {
      type: String,
      required: true,
    },
    numberOfItem: {
      type: Number,
      required: true,
    },
    commenters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BuyerCLTs",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const phoneModel = mongoose.model("PhoneCLTs", phoneSchema);

module.exports = phoneModel;
