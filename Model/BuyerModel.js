const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const buyerSchema = new Schema(
  {
    buyName: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: Schema.Types.ObjectId,
      ref: "PhoneCLTs",
    },
  },
  {
    timestamps: true,
  }
);

const buyerModel = mongoose.model("BuyerCLTs", buyerSchema);

module.exports = buyerModel;
