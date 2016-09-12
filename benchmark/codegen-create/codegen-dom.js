module.exports = function(node) {

    var nextId = 0;

    var code = '';

    function codegenEl(node, level) {
        var varName = level === 0 ? 'root' : `node${nextId++}`;

        code += `var ${varName} = document.createElement(${JSON.stringify(node.nodeName)})\n`;

        var attributes = node.attributes;

        for (var i=0; i<attributes.length; i++) {
            var attr = attributes[i];
            code += `${varName}.setAttribute(${JSON.stringify(attr.name)}, ${JSON.stringify(attr.value)})\n`;
        }

        var curChild = node.firstChild;
        while(curChild) {

            if (curChild.nodeType === 1) {
                var childVarName = codegenEl(curChild, level + 1);
                code += `${varName}.appendChild(${childVarName})\n`;
            } else if (curChild.nodeType === 3) {
                code += `${varName}.appendChild(document.createTextNode(${JSON.stringify(curChild.nodeValue)}))\n`;
            }

            curChild = curChild.nextSibling;
        }

        return varName;
    }

    codegenEl(node, 0);

    code += '\nreturn root;\n';

    return code;
};