var idRegExp = /^[$A-Z_][0-9A-Z_$]*$/i;

module.exports = function isValidJavaScriptIdentifier(varName) {
    return idRegExp.test(varName);
};
