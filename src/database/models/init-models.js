var DataTypes = require("sequelize").DataTypes;
var _accounts = require("./accounts");

function initModels(sequelize) {
  var accounts = _accounts(sequelize, DataTypes);


  return {
    accounts,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
