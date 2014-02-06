var htmlparser = require("htmlparser2");
var forEachEntry = require('raptor-util').forEachEntry;

var parserOptions  = {
    recognizeSelfClosing: true,
    recognizeCDATA: true,
    lowerCaseTags: false,
    xmlMode: false
};

function splitName(name) {
    var parts = name.split(':');
    if (parts.length === 1) {
        return {
            localName: name
        };
    }
    else if (parts.length === 2) {
        return {
            prefix: parts[0],
            localName: parts[1]
        };
    }
}

var entities = {
    quot: '"',
    lt: '<',
    gt: '>',
    amp: '&'
};

function decodeEntities(data) {
    return data.replace(/&(quot|lt|gt|amp);/g, function(match, entityName) {
        return entities[entityName];
    });
}

function ParseTreeBuilderHtml(taglibs) {
    ParseTreeBuilderHtml.$super.apply(this, arguments);
    this.parser = null;
}

ParseTreeBuilderHtml.prototype = {
    getPos: function() {
        return this.parser ? this.createPos(this.parser.startIndex) : null;
    },

    doParse: function (src, filePath) {

        var _this = this;

        // Create a pseudo root node
        this.handleStartElement(splitName('c:template'), []);

        var parser = this.parser = new htmlparser.Parser({
            onopentag: function(name, attribs){
                var el = splitName(name);

                var attributes = [];
                forEachEntry(attribs, function(name, value) {
                    var attr = splitName(name);
                    attr.value = decodeEntities(value);
                    attributes.push(attr);
                });

                _this.handleStartElement(el, attributes);
            },
            // oncdatastart: function() {
            //     console.log('oncdatastart: ', arguments);
            // },
            // oncdataend: function() {
            //     console.log('oncommentend: ', arguments);
            // },
            ontext: function(text){
                _this.handleCharacters(decodeEntities(text));
            },
            onclosetag: function(name){
                _this.handleEndElement();
            }
        }, parserOptions);
        parser.write(src);
        parser.end();

        // End the pseudo root node:
        _this.handleEndElement();
    }
};

require('raptor-util').inherit(ParseTreeBuilderHtml, require('./ParseTreeBuilder'));

module.exports = ParseTreeBuilderHtml;