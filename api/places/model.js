const mongoose = require("mongoose");
const PlaceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Place Name must be Insert"],
    },
    location: {
      type: String,
      required: [true, "Place Location must be Insert"],
    },
    description: {
      type: String,
      required: [true, "Place Description must be Insert"],
    },
    image: {
      type: String,
      required: [true, "Place Image URL must be Insert"],
    },
    urlmap: {
      type: String,
      required: [true, "Place URL GMaps must be Insert"],
    },
    category: {
      type: String,
      //   required: [true, "Place URL GMaps must be Insert"],
      enum: ["nongkrong", "sejarah", "hiburan", "belanja", "restoran"],
    },
    jumlah: {
      type: Number,
      required: [true, "Place Jumlah must be Insert"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Places", PlaceSchema);
