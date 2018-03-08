module.exports = function() {
    return `
    var fragment = range.createContextualFragment(html);
    return fragment.childNodes[0];`;
};

module.exports.generateInitCode = function(node, html) {
    return `
var range = document.createRange();
range.selectNode(document.body);
var html = ${JSON.stringify(html)};
`;
};