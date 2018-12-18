const fs = require("fs");
const path = require("path");
const commonMigrators = fs
    .readdirSync(__dirname)
    .filter(entry => entry !== "index.js")
    .map(entry => require(path.join(__dirname, entry)));

module.exports = function(root, context) {
    commonMigrators.forEach(migrator => migrator(root, context));
    return true;
};
