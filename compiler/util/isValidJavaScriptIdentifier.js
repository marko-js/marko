var reservedWords = require('./javaScriptReservedWords');
var varNameRegExp = /^[$A-Z_][0-9A-Z_$]*$/i;

module.exports = function isValidJavaScriptIdentifier(varName) {
    if (reservedWords[varName]) {
        return false;
    }

    return varNameRegExp.test(varName);
};
