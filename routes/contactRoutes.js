const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  createtContact,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("../controllers/contactController");

router.route("/").get(getAllContacts).post(createtContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .delete(deleteContactById);

module.exports = router;
