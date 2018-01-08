'use strict';
var removeComments = require('../../../compiler/util/removeComments');
var compiler = require('../../../compiler');

var integerRegExp = /^-?\d+$/;
var numberRegExp = /^-?(?:\d+|\d+\.\d*|\d*\.\d+|\d+\.\d+)$/;

var tokenizer = require('../../../compiler/util/tokenizer').create([
    {
        name: 'stringDouble',
        pattern: /"(?:[^"]|\\")*"/,
    },
    {
        name: 'stringSingle',
        pattern: /'(?:[^']|\\')*'/
    },
    {
        name: 'in',
        pattern: /\s+in\s+/,
    },
    {
        name: 'from',
        pattern: /\s+from\s+/
    },
    {
        name: 'to',
        pattern: /\s+to\s+/,
    },
    {
        name: 'step',
        pattern: /\s+step\s+/,
    },
    {
        name: 'semicolon',
        pattern: /[;]/,
    },
    {
        name: 'separator',
        pattern: /separator\s?=\s?/
    },
    {
        name: 'status-var',
        pattern: /status\-var\s?=\s?/
    },
    {
        name: 'iterator',
        pattern: /iterator\s?=\s?/
    },
    {
        name: 'pipe',
        pattern: /\s+\|\s+/
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
        name: 'array',
        pattern: /array/
    }
]);

var inRegExp = /^\s*([$A-Z_][0-9A-Z_$]*)(?:\s*,\s*([$A-Z_][0-9A-Z_$]*))?\s+in\s+/i;


function throwError(message) {
    var error = new Error(message);
    error.code = 'INVALID_FOR';
    throw error;
}

function buildIdentifier(name, errorMessage) {
    try {
        return compiler.builder.identifier(name);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function parseExpression(str, errorMessage) {
    try {
        return compiler.builder.parseExpression(str);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function parseStatement(str, errorMessage) {
    try {
        return compiler.builder.parseStatement(str);
    } catch(e) {
        throwError(errorMessage + ': ' + e.message);
    }
}

function createNumberExpression(str, errorMessage) {
    if (str == null) {
        return null;
    }

    if (integerRegExp.test(str)) {
        return compiler.builder.literal(parseInt(str, 10));
    } else if (numberRegExp.test(str)) {
        return compiler.builder.literal(parseFloat(str));
    } else {
        return parseExpression(str, errorMessage);
    }
}

/**
 * Parses a for loop string in the following forms:
 *
 * <varName> in <expression>
 * <varName> in <expression> | status-var=<varName> separator=<expression>
 * <varName> from <expression> to <expression>
 * <varName> from <expression> to <expression> step <expression>
 * <init>; <test>; <update>
 */
module.exports = function(str) {
    str = removeComments(str);

    let depth = 0;
    var prevToken;
    var loopType;
    var pipeFound = false;

    var varName;
    var nameVarName;
    var valueVarName;
    var inExpression;
    var statusVarName;
    var separatorExpression;
    var fromExpression;
    var toExpression;
    var stepExpression;
    var iteratorExpression;
    var isArray;

    var forInit;
    var forTest;
    var forUpdate;

    var inRegExpMatches = inRegExp.exec(str);
    if (inRegExpMatches) {
        if (inRegExpMatches[1] && inRegExpMatches[2]) {
            loopType = 'ForEachProp';
            nameVarName = inRegExpMatches[1];
            valueVarName = inRegExpMatches[2];
        } else {
            loopType = 'ForEach';
            varName = inRegExpMatches[1];
        }

        str = ' in ' + str.substring(inRegExpMatches[0].length);
    }

    function finishVarName(end) {
        varName = str.substring(0, end).trim();
    }

    function finishPrevPart(end) {
        if (!prevToken) {
            return;
        }

        var start = prevToken.end;
        var part = str.substring(start, end).trim();

        switch(prevToken.name) {
            case 'from':
                fromExpression = part;
                break;
            case 'to':
                toExpression = part;
                break;
            case 'in':
                inExpression = part;
                break;
            case 'step':
                stepExpression = part;
                break;
            case 'status-var':
                statusVarName = part;
                break;
            case 'separator':
                separatorExpression = part;
                break;
            case 'iterator':
                iteratorExpression = part;
                break;
            case 'array':
                isArray = true;
                break;
            case 'pipe':
                if (part.length !== 0) {
                    throwError('Unexpected input: ' + part);
                    return;
                }
                break;
        }
    }

    tokenizer.forEachToken(str, (token) => {
        switch(token.name) {
            case 'groupOpen':
                depth++;
                break;
            case 'groupClose':
                depth--;
                break;
            case 'in':
                if (depth === 0) {
                    prevToken = token;
                }
                break;
            case 'from':
                if (depth === 0 && !loopType) {
                    loopType = 'ForRange';
                    finishVarName(token.start);
                    prevToken = token;
                }
                break;
            case 'to':
                if (depth === 0 && prevToken && prevToken.name === 'from') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'step':
                if (depth === 0 && prevToken && prevToken.name === 'to') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'semicolon':
                if (depth === 0) {
                    loopType = 'For';

                    if (forInit == null) {
                        forInit = str.substring(0, token.start);
                    } else if (forTest == null) {
                        forTest = str.substring(prevToken.end, token.start);
                        forUpdate = str.substring(token.end);
                    } else {
                        throwError('Invalid native for loop. Expected format: <init>; <test>; <update>');
                    }

                    prevToken = token;
                }
                break;
            case 'pipe':
                if (depth === 0) {
                    pipeFound = true;
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'status-var':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'separator':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'iterator':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
            case 'array':
                if (depth === 0 && pipeFound && str.charAt(token.start-1) === ' ') {
                    finishPrevPart(token.start);
                    prevToken = token;
                }
                break;
        }
    });

    finishPrevPart(str.length);

    if (inExpression) {
        inExpression = parseExpression(inExpression, 'Invalid "in" expression');
    }

    if (separatorExpression) {
        separatorExpression = parseExpression(separatorExpression, 'Invalid "separator" expression');
    }

    if (iteratorExpression) {
        iteratorExpression = parseExpression(iteratorExpression, 'Invalid "iterator" expression');
    }

    if (fromExpression) {
        fromExpression = createNumberExpression(fromExpression, 'Invalid "from" expression');
    }

    if (toExpression) {
        toExpression = createNumberExpression(toExpression, 'Invalid "to" expression');
    }

    if (stepExpression) {
        stepExpression = createNumberExpression(stepExpression, 'Invalid "step" expression');
    }

    if (varName != null) {
        varName = buildIdentifier(varName, 'Invalid variable name');
    }

    if (nameVarName) {
        nameVarName = buildIdentifier(nameVarName, 'Invalid name variable');
    }

    if (valueVarName) {
        valueVarName = buildIdentifier(valueVarName, 'Invalid value variable');
    }

    if (statusVarName) {
        statusVarName = parseExpression(statusVarName, 'Invalid status-var option');
        if (statusVarName.type === 'Literal') {
            statusVarName = compiler.builder.identifier(statusVarName.value);
        } else  if (statusVarName.type !== 'Identifier') {
            throwError('Invalid status-var option');
        }
    }

    if (forInit) {
        forInit = parseStatement(forInit, 'Invalid for loop init');
    }

    if (forTest) {
        forTest = parseExpression(forTest, 'Invalid for loop test');
    }

    if (forUpdate) {
        forUpdate = parseExpression(forUpdate, 'Invalid for loop update');
    }

    // No more tokens... now we need to sort out what happened
    if (loopType === 'ForEach') {
        return {
            'loopType': loopType,
            'varName': varName,
            'in': inExpression,
            'separator': separatorExpression,
            'statusVarName': statusVarName,
            'iterator': iteratorExpression,
            'isArray': isArray
        };
    } else if (loopType === 'ForEachProp') {
        return {
            'loopType': loopType,
            'nameVarName': nameVarName,
            'valueVarName': valueVarName,
            'in': inExpression,
            'separator': separatorExpression,
            'statusVarName': statusVarName
        };
    } else if (loopType === 'ForRange') {
        return {
            'loopType': loopType,
            'varName': varName,
            'from': fromExpression,
            'to': toExpression,
            'step': stepExpression
        };
    } else if (loopType === 'For') {
        if (forTest == null) {
            throwError('Invalid native for loop. Expected format: <init>; <test>; <update>');
        }
        return {
            'loopType': loopType,
            'init': forInit,
            'test': forTest,
            'update': forUpdate
        };
    } else {
        throwError('Invalid for loop');
    }
};
