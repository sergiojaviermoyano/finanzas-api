const getAllAccounts = (req, res) => {
    //const allAccounts = accountService.getAllAccounts();
    //console.log("hola a todos get");
    return 1;

};

const getAccountById = (accountId) => {
    //const allAccounts = accountService.getAllAccounts();
    //console.log("hola a todos get");
    //res.send(`Get todas las accounts`);
    return `{account: ${accountId}, callNumber: 4 }`;

};

module.exports = {
    getAllAccounts,
    getAccountById
};