"use strict";
var tokenizer = require("./tokenizer").create([
    {
        name: "stringDouble",
        pattern: /"(?:[^"]|\\")*"/
    },
    {
        name: "stringSingle",
        pattern: /'(?:[^']|\\')*'/
    },
    {
        name: "singleLineComment",
        pattern: /\/\/.*/
    },
    {
        name: "multiLineComment",
        pattern: /\/\*(?:[\s\S]*?)\*\//
    }
]);

module.exports = function removeComments(str) {
    var comments = [];

    tokenizer.forEachToken(str, token => {
        switch (token.name) {
            case "singleLineComment":
            case "multiLineComment":
                comments.push(token);
                break;
        }
    });

    var len = comments.length;

    if (len) {
        for (var i = len - 1; i >= 0; i--) {
            var comment = comments[i];
            str = str.substring(0, comment.start) + str.substring(comment.end);
        }
    }

    return str;
};
