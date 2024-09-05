const express = require("express");
const router = express.Router();
const accountController = require("../../controllers/accountController")


router
    .get("/", accountController.getAllAccounts)
    .get("/:accountId", accountController.getAccountById)
    .post("/", accountController.insertAccount)
    .put("/:accountId", accountController.updateAccount)
    .delete("/:accountId", accountController.deleteAccount)

module.exports = router;