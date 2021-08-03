const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutModel = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter workout name",
      },

      type: {
        type: String,
        trim: true,
        required: "Enter type of work out",
      },

      weight: {
        type: Number,
        required: "Enter weight (lbs)",
      },

      sets: {
        type: Number,
        required: "Enter number of sets",
      },

      reps: {
        type: Number,
        required: "Enter number of reps",
      },

      duration: {
        type: Number,
        required: "Enter resistance duration (minutes)",
      },

      distance: {
        type: Number,
        required: "Enter distance (miles)",
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutModel);

module.exports = Workout;
