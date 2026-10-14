const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

/* =========================
   CREATE BLOG
   POST /api/blog
========================= */

router.post("/", createBlog);

/* =========================
   GET ALL BLOGS
   GET /api/blog
========================= */

router.get("/", getBlogs);

/* =========================
   GET SINGLE BLOG
   GET /api/blog/:id
========================= */

router.get("/:id", getBlogById);

/* =========================
   UPDATE BLOG
   PUT /api/blog/:id
========================= */

router.put("/:id", updateBlog);

/* =========================
   DELETE BLOG
   DELETE /api/blog/:id
========================= */

router.delete("/:id", deleteBlog);

module.exports = router;
