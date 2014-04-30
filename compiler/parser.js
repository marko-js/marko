require('raptor-ecma/es6');
var ParseTreeBuilderHtml = require('./ParseTreeBuilderHtml');
var ParseTreeBuilderXml = require('./ParseTreeBuilderXml');

function parse(src, filePath, taglibs) {
    var ParseTreeBuilder = filePath.endsWith('.rxml') ?
        ParseTreeBuilderXml :
        ParseTreeBuilderHtml;

    var parseTreeBuilder = new ParseTreeBuilder(taglibs);
    
    return parseTreeBuilder.parse(src, filePath);
}

exports.parse = parse;