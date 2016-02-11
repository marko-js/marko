'use strict';

module.exports = function(elNode, codegen) {
    var tagName = elNode.argument;
    if (!tagName) {
        codegen.addError('Invalid <html-element> tag. Expected: <html-element(<tag-name-expression>) ... >');
        return;
    }

    tagName = codegen.builder.parseExpression(tagName, { escapeXml: false });

    elNode.setTagName(tagName);
    return elNode;
};