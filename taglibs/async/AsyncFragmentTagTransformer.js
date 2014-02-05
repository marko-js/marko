'use strict';
var varNameRegExp = /^[A-Za-z_][A-Za-z0-9_]*$/;
module.exports = {
    process: function (node, compiler, template) {
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
        node.forEachProperty(function (namespace, name, value) {
            if (namespace === '' && name.startsWith('arg-')) {
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
            argString = 'require("raptor").extend(' + arg + ', ' + argString + ')';
        }
        if (argString) {
            node.setProperty('arg', template.makeExpression(argString));
        }
    }
};