var parseJavaScript = require('./parseJavaScript');

module.exports = function(src, builder) {
    return parseJavaScript(src, builder, false /* isExpression */ );
};