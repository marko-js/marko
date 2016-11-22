var reservedWords = require('./javaScriptReservedWords');

module.exports = function isJavaScriptReservedWord(varName) {
    return reservedWords[varName] === true;
};
