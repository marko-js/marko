'use strict';
var varNameRegExp = /^[A-Za-z_][A-Za-z0-9_]*$/;
module.exports = function transform(node, compiler, template) {
    var varName = node.getAttribute('var') || node.getAttribute('data-provider') || node.getAttribute('dependency');
    if (varName) {
        if (!varNameRegExp.test(varName)) {
            node.addError('Invalid variable name of "' + varName + '"');
            return;
        }
    } else {
        node.addError('Either "var" or "data-provider" is required');
        return;
    }
    

    var argProps = [];
    var propsToRemove = [];
    node.forEachProperty(function (name, value) {
        if (name.startsWith('arg-')) {
            var argName = name.substring('arg-'.length);
            argProps.push(JSON.stringify(argName) + ': ' + value);
            propsToRemove.push(name);
        }
    });
    propsToRemove.forEach(function (propName) {
        node.removeProperty(propName);
    });
    var argString;
    if (argProps.length) {
        argString = '{' + argProps.join(', ') + '}';
    }
    var arg = node.getProperty('arg');
    if (arg) {
        var extendFuncName = template.getStaticHelperFunction('extend', 'xt');
        argString = extendFuncName + '(' + arg + ', ' + argString + ')';
    }
    if (argString) {
        node.setProperty('arg', template.makeExpression(argString));
    }
};