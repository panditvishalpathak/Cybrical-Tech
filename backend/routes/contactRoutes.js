const express = require("express");

const {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

/* =========================
   CONTACT ROUTES
========================= */

// Create contact
router.post("/", createContact);

// Get all contacts
router.get("/", getContacts);

// Get single contact
router.get("/:id", getContactById);

// Update contact status
router.put("/:id/status", updateContactStatus);

// Delete contact
router.delete("/:id", deleteContact);

module.exports = router;
