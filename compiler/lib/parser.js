var ParseTreeBuilderXml = require('./ParseTreeBuilderXml');

function parse(src, filePath, taglibs) {
    var parseTreeBuilder = new ParseTreeBuilderXml(taglibs);
    return parseTreeBuilder.parse(src, filePath);
}

exports.parse = parse;