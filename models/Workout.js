const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: [true, "This exercise needs a type."],
        },
        name: {
          type: String,
          required: [true, "This exercise needs a name."],
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
