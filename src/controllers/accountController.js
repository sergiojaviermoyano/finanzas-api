const accountService = require("../services/accountService");

const getAllAccounts = (req, res) => {
    //const allAccounts = accountService.getAllAccounts();
    //console.log("hola a todos get");
    res.send(`Get todas las accounts`);
};

const getAccountById = (req, res) => {
    const account = accountService.getAccountById(req.params.accountId);
    //console.log("hola a todos getALL");
    res.send(`get por id ${account}`);
}

module.exports = {
    getAllAccounts,
    getAccountById
};