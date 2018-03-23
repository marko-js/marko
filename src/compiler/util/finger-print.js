var sha1 = require("simple-sha1");

module.exports = function(str) {
    return sha1.sync(str);
};
