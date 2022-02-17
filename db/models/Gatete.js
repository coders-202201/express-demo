const { model, Schema } = require("mongoose");

const GateteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

const Gatete = model("Gatete", GateteSchema, "gatetes");

module.exports = Gatete;
