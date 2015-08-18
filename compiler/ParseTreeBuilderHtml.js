/*
* Copyright 2011 eBay Software Foundation
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
* 
*    http://www.apache.org/licenses/LICENSE-2.0
* 
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var htmlparser = require("htmlparser2");
var forEachEntry = require('raptor-util').forEachEntry;

var parserOptions  = {
    recognizeSelfClosing: true,
    recognizeCDATA: true,
    lowerCaseTags: false,
    lowerCaseAttributeNames: false,
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
    // match numeric, hexadecimal & named entities
    return data.replace(/&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z0-9]+);/g, function(match, entityName) {
        return entities[entityName] || '${entity:' + entityName + '}';
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
        this.handleStartElement(splitName('c-template'), []);

        var parser = this.parser = new htmlparser.Parser({
            onopentag: function(name, attribs){
                var el = splitName(name);

                var attributes = [];
                forEachEntry(attribs, function(name, value) {
                    var attr = splitName(name);
                    attr.value = decodeEntities(value);
                    attributes.push(attr);
                });

                if (name.toLowerCase() === 'script') {
                    attributes.push({
                        localName: 'c-escape-xml',
                        value: 'false'
                    });
                }

                _this.handleStartElement(el, attributes);
            },
            onprocessinginstruction: function(name, data) {
                _this.handleCharacters('${startTag:' + data + '}');
                // _this.handleCharacters(data);
                // _this.handleCharacters('${entity:gt}');
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
                _this.handleEndElement(name);
            },
            oncomment: function(comment) {
                _this.handleComment(comment);
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
