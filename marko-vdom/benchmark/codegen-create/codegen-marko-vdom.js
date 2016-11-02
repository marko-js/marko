function indentStr(level) {
    var str = '';
    for (var i=0; i<level; i++) {
        str += '  ';
    }

    return str;
}
module.exports = function(node) {
    var code = '';

    function codegenEl(node, level) {
        if (level === 0) {
            code += 'createElement';
        } else {
            code += '.e';
        }

        var attrsMap = {};

        var attributes = node.attributes;
        for (var i=0; i<attributes.length; i++) {
            var attr = attributes[i];
            attrsMap[attr.name] = attr.value;
        }

        code += `(${JSON.stringify(node.nodeName)}, ${JSON.stringify(attrsMap)}, ${node.childNodes.length})\n`;
        // codegenAttrs(node.attributes, level + 1);

        var curChild = node.firstChild;
        while(curChild) {
            codegen(curChild, level + 1);
            curChild = curChild.nextSibling;
        }
    }

    function codegenText(node, level) {
        code += `.t(${JSON.stringify(node.nodeValue)})\n`;
    }

    function codegen(node, level) {
        code += indentStr(level);

        if (node.nodeType === 1) {
            codegenEl(node, level);
        } else if (node.nodeType === 3) {
            codegenText(node, level);
        }
    }

    codegen(node, 0);

    return 'return ' + code + '\n';
};

module.exports.generateInitCode = function(node, html) {
    return `
    var MarkoVDOM = window.MarkoVDOM;
    var createElement = MarkoVDOM.createElement;
`;

};

