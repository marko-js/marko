function ltrim(s) {
    return s ? s.replace(/^\s\s*/,'') : '';
}

function getNodeType(node) {
    return node.nodeType || node.$__nodeType;
}

function vdomToHTML(node, options) {

    // NOTE: We don't use XMLSerializer because we need to sort the attributes to correctly compare output HTML strings
    // BAD: return (new XMLSerializer()).serializeToString(node);
    var html = '';
    function serializeHelper(node, indent) {
        var nodeType = getNodeType(node);

        if (nodeType === 1) {
            serializeElHelper(node, indent);
        } else if (nodeType === 3) {
            serializeTextHelper(node, indent);
        } else if (nodeType === 8) {
            serializeCommentHelper(node, indent);
        } else {
            console.log('Invalid node:', node);
            html += indent + `INVALID NODE TYPE ${nodeType}\n`;
            // throw new Error('Unexpected node type');
        }
    }

    function serializeElHelper(el, indent) {
        var tagName = el.nodeName;

        var elNamespaceURI = el.namespaceURI || el.$__namespaceURI;

        if (elNamespaceURI === 'http://www.w3.org/2000/svg') {
            tagName = 'svg:' + tagName;
        } else if (elNamespaceURI === 'http://www.w3.org/1998/Math/MathML') {
            tagName = 'math:' + tagName;
        }

        html += indent + '<' + tagName;

        var attributes = el.attributes;
        var attributesArray = [];
        var attrName;

        if (typeof attributes.length === 'number') {
            for (var i=0; i<attributes.length; i++) {
                var attr = attributes[i];
                if (attr.namespaceURI) {
                    attrName = attr.namespaceURI + ':' + attr.localName;
                } else {
                    attrName = attr.name;
                }

                if (attrName === 'data-marko-const') {
                    continue;
                }
                attributesArray.push(' ' + attrName + '="' + attr.value + '"');
            }
        } else {
            for (attrName in attributes) {
                if (attrName === 'data-marko-const') {
                    continue;
                }

                var attrValue = attributes[attrName];
                if (typeof attrValue !== 'string') {
                    if (attrValue === true) {
                        attrValue = '';
                    } else if (!attrValue) {
                        continue;
                    }
                }

                if (attrName === 'xlink:href') {
                    attrName = 'http://www.w3.org/1999/xlink:href';
                }
                attributesArray.push(' ' + attrName + '="' + attrValue + '"');
            }
        }

        attributesArray.sort();

        html += attributesArray.join('');

        html += '>\n';

        if (tagName.toUpperCase() === 'TEXTAREA') {
            html += indent + '  VALUE: ' + JSON.stringify(ltrim(el.value)) + '\n';
        } else {

            if (tagName.toUpperCase() === 'PRE' && el.firstChild && getNodeType(el.firstChild) === 3) {
                el.firstChild.nodeValue = ltrim(el.firstChild.nodeValue);
            }
            var curChild = el.firstChild;
            while(curChild) {
                serializeHelper(curChild, indent + '  ');
                curChild = curChild.nextSibling;
            }
        }
    }

    function serializeTextHelper(node, indent) {
        html += indent + JSON.stringify(node.nodeValue) + '\n';
    }

    function serializeCommentHelper(node, indent) {
        html += indent + '<!--' + JSON.stringify(node.nodeValue) + '-->\n';
    }

    if (getNodeType(node) === 11 /* DocumentFragment */ || (options && options.childrenOnly)) {
        var curChild = node.firstChild;
        while(curChild) {
            serializeHelper(curChild, '');
            curChild = curChild.nextSibling;
        }
    } else {
        serializeHelper(node, '');
    }

    return html;
}

module.exports = vdomToHTML;
