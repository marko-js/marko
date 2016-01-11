var compiler = require('../');

function removeEscapeFunctions(node) {
    var walker = compiler.createWalker({
        enter: function(node, parent) {
            if (node.type === 'FunctionCall' &&
                node.callee.type === 'Identifier' &&
                (node.callee.name === '$noEscapeXml' || node.callee.name === '$escapeXml')) {
                return node.args[0];
            }
        }
    });

    return walker.walk(node);
}

module.exports = removeEscapeFunctions;