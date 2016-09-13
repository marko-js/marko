'use strict';

var TextVDOM = require('./TextVDOM');
var Literal = require('../../Literal');

module.exports = function(node, codegen, vdomUtil) {
    var argument = codegen.generateCode(node.argument);

    if (argument instanceof Literal && argument.value === '') {
        // Don't add empty text nodes to the final tree
        return null;
    }

    var isStatic = vdomUtil.isStaticValue(argument);
    return new TextVDOM({ argument, isStatic });
};