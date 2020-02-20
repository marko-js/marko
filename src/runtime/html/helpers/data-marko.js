"use strict";

var escapeSingleQuotes = require("./escape-xml").s;

module.exports = function dataMarko(data) {
    return " data-marko='" + escapeSingleQuotes(JSON.stringify(data)) + "'";
};
