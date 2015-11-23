'use strict';
var htmljs = require('htmljs-parser');
var Parser = require('./Parser');

class HtmlJsParser extends Parser {
    constructor(options) {
        super(options);
    }

    doParse(src) {
        var self = this;

        var parser = htmljs.createParser({
            ontext(event) {
                self.handleCharacters(event.text);
            },

            oncontentplaceholder(event) {
                // placeholder within content
                self.handleBodyTextPlaceholder(event.expression, event.escape);
            },

            onnestedcontentplaceholder(event) {
                // placeholder within string that is within content placeholder
            },

            onattributeplaceholder(event) {
                // placeholder within attribute
            },

            oncdata(event) {
                self.handleCharacters(event.text);
            },

            onopentag(event) {
                var tagName = event.tagName;
                var argument = event.argument;
                var attributes = event.attributes;
                self.handleStartElement({tagName, argument, attributes});
            },

            onclosetag(event) {
                var tagName = event.tagName;
                self.handleEndElement(tagName);
            },

            ondtd(event) {
                // DTD (e.g. <DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0//EN">)
                self.handleText(event.dtd);
            },

            ondeclaration(event) {
                // Declaration (e.g. <?xml version="1.0" encoding="UTF-8" ?>)
                self.handleText(event.declaration);
            },

            oncomment(event) {
                // Text within XML comment
                self.handleComment(event.text);
            },

            onerror(event) {
                // Error
            }
        });

        parser.parse(src);
    }

    getPos() {
        return this.createPos(0); // TODO return proper position
    }
}

module.exports = HtmlJsParser;