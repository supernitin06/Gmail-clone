const express = require("express");

const { createEmail,deleteEmail, findAllEmails } = require("../controlers/emailcontroler");
const authenticate = require("../middlewere/isauthenticated");

const router = express.Router();

// Route for creating an email
router.route("/create").post(authenticate,createEmail);
router.route("/:id").delete(authenticate,deleteEmail);
router.route("/findEmails").get(authenticate,findAllEmails);


module.exports = router;
