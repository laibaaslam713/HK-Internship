const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [300, "Description cannot exceed 300 characters"],
    },
    details: {
      type: String,
      required: [true, "Details are required"],
    },
    icon: {
      type: String,
      default: "⚙️",
    },
    image_url: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: ["Web", "AI", "Mobile", "Design", "Marketing", "Other"],
      default: "Other",
    },
    price: {
      type: Number,
      min: [0, "Price cannot be negative"],
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

serviceSchema.pre("validate", function () {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
});

module.exports = mongoose.model("Service", serviceSchema);