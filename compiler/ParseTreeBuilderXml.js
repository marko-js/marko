var sax = require("sax");
var extend = require('raptor-util/extend');

function ParseTreeBuilderXml(taglibs) {
    ParseTreeBuilderXml.$super.apply(this, arguments);
    this.parser = null;
    this.filePath = null;
}

ParseTreeBuilderXml.prototype = {
    getPos: function() {
        var parser = this.parser;
        var filePath = this.filePath;
        
        var line = parser.line + 1;
        
        return {
            line: line,
            column: parser.column,
            filePath: filePath,
            toString: function() {
                return this.filePath + ":" + this.line + ":" + this.column;
            }
            
        };
    },

    doParse: function (src, filePath) {
        
        this.filePath = filePath;
        var parser = this.parser = sax.parser(true /*strict*/, {
            trim: false,
            normalize: false,
            lowercasetags: false,
            xmlns: true
        });

        var _this = this;
    
        extend(parser, {
            onerror: function(e) {
                throw e;
            },
            
            ontext: function(text) {
                text = text.replace(/\r\n|\r/g, "\n");
                _this.handleCharacters(text);
            },

            oncdata: function(text) {
                text = text.replace(/\r\n|\r/g, "\n");
                _this.handleCharacters(text);
            },
            
            onopentag: function (node) {
                var el = {
                    namespace: node.uri,
                    prefix: node.prefix,
                    localName: node.local
                };

                var attributes = Object.keys(node.attributes).map(function(attrName) {
                    var attr = node.attributes[attrName];
                    return {
                        namespace: attr.uri,
                        localName: attr.local,
                        prefix: attr.prefix,
                        value: attr.value
                    };
                });

                _this.handleStartElement(el, attributes);
            },

            
            
            onclosetag: function () {
                _this.handleEndElement();
            },

            oncomment: function (comment) {
            }
        });

        parser.write(src).close();
    }
};

require('raptor-util').inherit(ParseTreeBuilderXml, require('./ParseTreeBuilder'));

module.exports = ParseTreeBuilderXml;