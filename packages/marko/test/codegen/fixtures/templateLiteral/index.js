"use strict";

module.exports = function(builder) {
    var templateLiteral = builder.templateLiteral(
        ["hello ", ""],
        [builder.identifier("name")]
    );
    var templateLiteralEscape = builder.templateLiteral(["hello ${name}"], []);
    var templateLiteralEscape2 = builder.templateLiteral(
        ["hello \\", ""],
        [builder.identifier("name")]
    );
    var templateLiteralEscapeQuotes = builder.templateLiteral(
        ['hello "`"'],
        []
    );

    var nsTemplateLiteral = builder.templateLiteral(
        ["hello ", ""],
        [builder.identifier("name")]
    );
    var nsTemplateLiteralEscape = builder.templateLiteral(
        ["hello ${name}"],
        []
    );
    var nsTemplateLiteralEscape2 = builder.templateLiteral(
        ["hello \\", ""],
        [builder.identifier("name")]
    );
    var nsTemplateLiteralEscapeQuotes = builder.templateLiteral(
        ['hello "`"'],
        []
    );

    nsTemplateLiteral.nonstandard = true;
    nsTemplateLiteralEscape.nonstandard = true;
    nsTemplateLiteralEscape2.nonstandard = true;
    nsTemplateLiteralEscapeQuotes.nonstandard = true;

    return [
        templateLiteral,
        templateLiteralEscape,
        templateLiteralEscape2,
        templateLiteralEscapeQuotes,
        nsTemplateLiteral,
        nsTemplateLiteralEscape,
        nsTemplateLiteralEscape2,
        nsTemplateLiteralEscapeQuotes
    ];
};

module.exports.skipCodegen = true;
