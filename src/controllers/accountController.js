const accountService = require("../services/accountService");

const getAllAccounts = (req, res) => {
    accountService.getAllAccounts()
        .then((data) => {
            res.status(200).json({ data: data });
        })
        .catch((error) => {
            res.status(200).json({ data: error });
        })

};

const getAccountById = (req, res) => {
    accountService.getAccountById(req.params.accountId)
        .then((data) => {
            res.status(200).json({ data: data });
        })
        .catch((error) => {
            res.status(200).json({ data: error });
        });
};

const insertAccount = (req, res) => {
    accountService.insertAccount(req.body)
        .then((data) => {
            res.status(201).json({ data: data });
        })
        .catch((error) => {
            res.status(200).json({ data: error });
        });
};

const updateAccount = (req, res) => {
    accountService.updateAccount(req.body, req.params.accountId)
        .then((data) => {
            res.status(201).json({ data: data });
        })
        .catch((error) => {
            res.status(200).json({ data: error });
        })
};

const deleteAccount = (req, res) => {
    accountService.deleteAccount(req.params.accountId)
        .then((data) => {
            res.status(200).json({ data: data });
        })
        .catch((error) => {
            res.status(200).json({ data: error });
        })
};

module.exports = {
    getAllAccounts,
    getAccountById,
    insertAccount,
    updateAccount,
    deleteAccount
};