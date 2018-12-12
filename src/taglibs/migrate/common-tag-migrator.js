const fs = require("fs");
const path = require("path");
const commonMigrators = fs
    .readdirSync(path.join(__dirname, "./common/"))
    .map(dir => require(`./common/${dir}`));

module.exports = function(el, context) {
    if (el.detachNode) {
        return false;
    }
    commonMigrators.forEach(migrator => migrator(el, context));
    return true;
};
