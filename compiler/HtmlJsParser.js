'use strict';
var htmljs = require('htmljs-parser');

class HtmlJsParser {
    parse(src, handlers) {
        var parser = this.parser = htmljs.createParser({
            ontext(event) {
                handlers.handleCharacters(event.text);
            },

            oncontentplaceholder(event) {
                // placeholder within content
                handlers.handleBodyTextPlaceholder(event.expression, event.escape);
            },

            onnestedcontentplaceholder(event) {
                // placeholder within string that is within content placeholder
            },

            onattributeplaceholder(event) {
                // placeholder within attribute
            },

            oncdata(event) {
                handlers.handleCharacters(event.text);
            },

            onopentag(event) {
                handlers.handleStartElement(event);
            },

            onclosetag(event) {
                var tagName = event.tagName;
                handlers.handleEndElement(tagName);
            },

            ondtd(event) {
                // DTD (e.g. <DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0//EN">)
                handlers.handleCharacters(event.dtd);
            },

            ondeclaration(event) {
                // Declaration (e.g. <?xml version="1.0" encoding="UTF-8" ?>)
                handlers.handleCharacters(event.declaration);
            },

            oncomment(event) {
                // Text within XML comment
                handlers.handleComment(event.text);
            },

            onerror(event) {
                // Error
            }
        });

        parser.parse(src);
    }

    enterParsedTextContentState() {
        this.parser.enterParsedTextContentState();
    }

    enterStaticTextContentState() {
        this.parser.enterStaticTextContentState();
    }
}

module.exports = HtmlJsParser;