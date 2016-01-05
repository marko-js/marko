'use strict';
var removeComments = require('./removeComments');
var parseExpression = require('./parseExpression');
var tokenizer = require('./tokenizer').create([
    {
        name: 'stringDouble',
        pattern: /"(?:[^"]|\\")*"/,
    },
    {
        name: 'stringSingle',
        pattern: /'(?:[^']|\\')*'/
    },
    {
        name: 'groupOpen',
        pattern: /[\{\(\[]/
    },
    {
        name: 'groupClose',
        pattern: /[\}\)\]]/
    },
    {
        name: 'comma',
        pattern: /[,]/
    }
]);

module.exports = function(str) {
    str = removeComments(str);

    let depth = 0;
    var argStart = 0;
    var args = [];

    function finishPrevArg(end) {
        var arg = str.substring(argStart, end);
        args.push(parseExpression(arg));
    }

    tokenizer.forEachToken(str, (token) => {
        switch(token.name) {
            case 'groupOpen':
                depth++;
                break;
            case 'groupClose':
                depth--;
                break;
            case 'comma':
                if (depth === 0) {
                    finishPrevArg(token.start);
                    argStart = token.end;
                }
                break;
        }
    });

    finishPrevArg(str.length);

    return args;
};