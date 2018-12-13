const fs = require("fs");
const path = require("path");
const getMigrators = d =>
    fs.statSync(d).isDirectory()
        ? Array.prototype.concat(
              ...fs.readdirSync(d).map(f => getMigrators(path.join(d, f)))
          )
        : require(d);
const commonMigrators = getMigrators(path.join(__dirname, "./common/"));

module.exports = function(el, context) {
    if (el.detachNode) {
        return false;
    }
    commonMigrators.forEach(migrator => migrator(el, context));
    return true;
};
