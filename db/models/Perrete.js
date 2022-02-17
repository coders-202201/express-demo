const { model, Schema } = require("mongoose");

const PerreteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
});

const Perrete = model("Perrete", PerreteSchema, "perretes");

module.exports = Perrete;
