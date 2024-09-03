const express = require("express");
const router = express.Router();
const accountController = require("../../controllers/accountController")


router
    .get("/", accountController.getAllAccounts)
    .get("/:accountId", accountController.getAccountById)

module.exports = router;