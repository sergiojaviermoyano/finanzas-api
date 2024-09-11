const modelAccounts = require("./../database/models").accounts;

const getAllAccounts = () => {
  return modelAccounts.findAll({ raw: true });
};

const getAccountById = (accountId) => {
  return modelAccounts.findByPk(accountId);

};

const insertAccount = (account) => {
  return modelAccounts.create(account);
};

const updateAccount = (account, accountId) => {
  return modelAccounts.update(
    account,
    {
      where: {
        id: accountId,
      },
    },
  );
};

const deleteAccount = (accountId) => {
  //logical delete 
  return modelAccounts.update(
    {
      'status': 'DL'
    },
    {
      where: {
        id: accountId,
      },
    },
  );
}

module.exports = {
  getAllAccounts,
  getAccountById,
  insertAccount,
  updateAccount,
  deleteAccount
};