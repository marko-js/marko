var ParseTreeBuilderHtml = require('./ParseTreeBuilderHtml');

function parse(src, filePath, taglibs) {
    var parseTreeBuilder = new ParseTreeBuilderHtml(taglibs);
    return parseTreeBuilder.parse(src, filePath);
}

exports.parse = parse;