const mongoose = require("mongoose");

const athleteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    sport: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Athlete = mongoose.model("Athlete", athleteSchema);

module.exports = Athlete;
