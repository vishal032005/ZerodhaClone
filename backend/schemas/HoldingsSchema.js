const { Schema } = require("mongoose");

// const HoldingsSchema = new Schema({
//   name: String,
//   qty: Number,
//   avg: Number,
//   price: Number,
//   net: String,
//   day: String,
// });


const HoldingsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  qty: {
    type: Number,
    required: true
  },

  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean
});


module.exports = { HoldingsSchema };