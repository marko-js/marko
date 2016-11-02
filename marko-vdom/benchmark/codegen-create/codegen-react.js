function indentStr(level) {
    var str = '';
    for (var i=0; i<level; i++) {
        str += '  ';
    }

    return str;
}

module.exports = function(node) {
    function codegenChildNodes(node, level) {

        var curChild = node.firstChild;
        if (!curChild) {
            return 'null';
        }

        var code = '[\n';


        var childLevel = level + 2;
        while(curChild) {
            code += indentStr(childLevel) + codegen(curChild, childLevel);
            curChild = curChild.nextSibling;

            if (curChild) {
                code += ',\n';
            } else {
                code += '\n';
            }
        }

        code += indentStr(level + 1) + ']';

        return code;
    }

    function codegenEl(node, level) {

        var attributesMap = null;

        var attributes = node.attributes;
        if (attributes.length) {
            attributesMap = {};

            for (var i=0; i<attributes.length; i++) {
                var attr = attributes[i];
                var attrName = attr.name;
                var attrValue = attr.value;

                if (attrName === 'class') {
                    attrName = 'className';
                }
                attributesMap[attrName] = attrValue;
            }
        }


        return  `React.createElement(${JSON.stringify(node.nodeName)}, ${JSON.stringify(attributesMap)}, ${codegenChildNodes(node, level)})`;
    }

    function codegen(node, level) {
        if (node.nodeType === 1) {
            return codegenEl(node, level);
        } else if (node.nodeType === 3) {
            return JSON.stringify(node.nodeValue);
        }
    }

    return 'return ' + codegen(node, 0) + '\n';
};