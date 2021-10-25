const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },

  type: {
    type: String,
    trim: true,
    required: "Workout Type Required",
  },

  weight: {
    type: Number,
    required: "Weight is Required"
  },

  sets: {
    type: Number,
    required: "Sets is Required"
  },

  reps: {
    type: Number,
    required: "Reps is Required"
  },

  duration: {
    type: Number,
    required: "Duration of workout is Required"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
