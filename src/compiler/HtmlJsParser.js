"use strict";
var htmljs = require("htmljs-parser");

class HtmlJsParser {
    constructor(options) {
        this.defaultOptions = options;
    }

    parse(src, handlers, filename, options) {
        var listeners = {
            onText(event) {
                handlers.handleCharacters(event.value, event.parseMode);
            },

            onPlaceholder(event) {
                if (event.withinBody) {
                    if (!event.withinString) {
                        handlers.handleBodyTextPlaceholder(
                            event.value,
                            event.escape
                        );
                    }
                }
            },

            onString(event) {
                if (!event.isStringLiteral) {
                    let value = "";
                    event.stringParts.forEach(part => {
                        if (part.type === "placeholder") {
                            value += "${" + part.value + "}";
                        } else {
                            value += part.replace(/`/g, "\\`");
                        }
                    });
                    event.value = "$nonstandard`" + value + "`";
                }
            },

            onCDATA(event) {
                handlers.handleCharacters(event.value, "static-text");
            },

            onOpenTagName(event) {
                event.selfClosed = false; // Don't allow self-closed tags

                var tagParseOptions = handlers.getTagParseOptions(event);

                if (tagParseOptions) {
                    event.setParseOptions(tagParseOptions);
                }
            },

            onOpenTag(event, parser) {
                event.selfClosed = false; // Don't allow self-closed tags
                var tagString = parser
                    .substring(event.pos, event.endPos)
                    .replace(/^<|\/>$|>$/g, "")
                    .trim();

                handlers.handleStartElement(event, tagString);

                var tagParseOptions = handlers.getTagParseOptions(event);
                if (tagParseOptions) {
                    event.setParseOptions(tagParseOptions);
                }
            },

            onCloseTag(event) {
                var tagName = event.tagName;
                handlers.handleEndElement(tagName);
            },

            onDocumentType(event) {
                // Document type: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd
                // NOTE: The value will be all of the text between "<!" and ">""
                handlers.handleDocumentType(event.value);
            },

            onDeclaration(event) {
                handlers.handleDeclaration(event.value);
            },

            onComment(event) {
                // Text within XML comment
                handlers.handleComment(event.value);
            },

            onScriptlet(event) {
                // <% (code) %> or $ {}
                handlers.handleScriptlet(event);
            },

            onError(event) {
                handlers.handleError(event);
            }
        };

        var mergedOptions = Object.assign({}, this.defaultOptions, options);
        var parser = (this.parser = htmljs.createParser(listeners, {
            ignorePlaceholders: mergedOptions.ignorePlaceholders,
            isOpenTagOnly: function(tagName) {
                return handlers.isOpenTagOnly(tagName);
            }
        }));
        parser.parse(src, filename);
    }
}

module.exports = HtmlJsParser;
