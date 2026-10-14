const mongoose = require("mongoose");

// ===============================
// LESSON SCHEMA
// ===============================

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    videoUrl: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      default: 0,
    },

    isPreview: {
      type: Boolean,
      default: false,
    },

    zipUrl: {
      type: String,
      default: "",
    },

    zipName: {
      type: String,
      default: "",
    },
  },
  {
    _id: true,
  },
);

// ===============================
// MODULE SCHEMA
// ===============================

const moduleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      default: 0,
    },

    lessons: {
      type: [lessonSchema],
      default: [],
    },
  },
  {
    _id: true,
  },
);

// ===============================
// COURSE SCHEMA
// ===============================

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      default: "General",
    },

    level: {
      type: String,
      default: "Beginner",
    },

    duration: {
      type: String,
      default: "",
    },

    thumbnail: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: true,
    },

    // Single ZIP (legacy fallback)
    zipFile: {
      url: { type: String, default: "" },
      fileName: { type: String, default: "" },
      fileSize: { type: String, default: "" },
    },

    // Array of multiple ZIP files (1st, 2nd, 3rd ZIP files)
    zipFiles: [
      {
        title: { type: String, default: "" },
        url: { type: String, default: "" },
        fileName: { type: String, default: "" },
        fileSize: { type: String, default: "" },
      },
    ],

    modules: {
      type: [moduleSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Course", courseSchema);
