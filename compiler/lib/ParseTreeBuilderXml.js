var sax = require('raptor-xml/sax');
var createError = require('raptor-util').createError;

function ParseTreeBuilderXml(taglibs) {
    ParseTreeBuilderXml.$super.apply(this, arguments);
    this.parser = null;
}

ParseTreeBuilderXml.prototype = {
    getPos: function() {
        return this.parser.getPos();
    },

    parse: function (src, filePath) {
        
        var parser = this.parser = sax.createParser({
                trim: false,
                normalize: false,
                dom: src.documentElement != null
            });

        var _this = this;

        parser.on({
            error: function (e) {
                throw createError(e);
            },
            characters: function (t) {
                _this.handleCharacters(t);
            },
            cdata: function (t) {
                _this.handleCharacters(t);
            },
            startElement: function (elNode) {
                var el = {
                    namespace: elNode.getNamespaceURI(),
                    prefix: elNode.getPrefix(),
                    localName: elNode.getLocalName(),
                    namespaceMappings: elNode.getNamespaceMappings()
                };

                var attributes = elNode.getAttributes().map(function (attr) {
                    return {
                        namespace: attr.getNamespaceURI(),
                        localName: attr.getLocalName(),
                        prefix: attr.getPrefix(),
                        value: attr.getValue()
                    };
                });

                _this.handleStartElement(el, attributes);
            },
            endElement: function () {
                _this.handleEndElement();
            }
        }, this);

        parser.parse(src, filePath);
        
        return this.getRootNode();
    }
};

require('raptor-util').inherit(ParseTreeBuilderXml, require('./ParseTreeBuilder'));

module.exports = ParseTreeBuilderXml;