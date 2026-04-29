const express = require("express");
const router = express.Router();
const { body, validationResult, param } = require("express-validator");
const Service = require("../models/Services");

// ─── Helper: format validation errors ───────────────────────────────────────
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

// GET /services
// category, search, page, limit
router.get("/", async (req, res) => {
  try {
    const { category, search, page = 1, limit = 12 } = req.query;
    const filter = { status: "active" };

    if (category && category !== "All") {
      filter.category = category;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Service.countDocuments(filter);
    const services = await Service.find(filter)
      .select("-details")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json({
      success: true,
      count: services.length,
      total,
      totalPages: Math.ceil(total / parseInt(limit)),
      currentPage: parseInt(page),
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error while fetching services",
      error: error.message,
    });
  }
});

//  GET /services/categories 
router.get("/categories", async (req, res) => {
  try {
    const categories = await Service.distinct("category", { status: "active" });
    res.status(200).json({ success: true, data: ["All", ...categories] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//  GET /services/:slug 
router.get(
  "/:slug",
  [param("slug").trim().notEmpty().withMessage("Slug is required")],
  handleValidationErrors,
  async (req, res) => {
    try {
      const service = await Service.findOne({
        slug: req.params.slug,
        status: "active",
      });

      if (!service) {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      res.status(200).json({ success: true, data: service });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

//  POST /services
router.post(
  "/",
  [
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("description").trim().notEmpty().withMessage("Description is required"),
    body("details").trim().notEmpty().withMessage("Details are required"),
    body("category")
      .optional()
      .isIn(["Web", "AI", "Mobile", "Design", "Marketing", "Other"])
      .withMessage("Invalid category"),
    body("price").optional().isNumeric().withMessage("Price must be a number"),
    body("status")
      .optional()
      .isIn(["active", "inactive"])
      .withMessage("Invalid status"),
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const service = await Service.create(req.body);
      res.status(201).json({ success: true, data: service });
    } catch (error) {
      if (error.code === 11000) {
        return res
          .status(409)
          .json({ success: false, message: "Slug already exists" });
      }
      res.status(500).json({ success: false, message: error.message });
    }
  }
);

// PUT /services/:slug 
router.put("/:slug", async (req, res) => {
  try {
    const service = await Service.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );
    if (!service)
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/:slug", async (req, res) => {
  try {
    const service = await Service.findOneAndDelete({ slug: req.params.slug });
    if (!service)
      return res
        .status(404)
        .json({ success: false, message: "Service not found" });
    res
      .status(200)
      .json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;