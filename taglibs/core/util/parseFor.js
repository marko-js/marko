'use strict';
var Expression = require('../../../compiler/ast/Expression');
var Literal = require('../../../compiler/ast/Literal');
var Identifier = require('../../../compiler/ast/Identifier');
var removeComments = require('../../../compiler/util/removeComments');

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
        pattern: /separator=/
    },
    {
        name: 'status-var',
        pattern: /status\-var=/
    },
    {
        name: 'iterator',
        pattern: /iterator=/
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
    }
]);


function createNumberExpression(str) {
    if (str == null) {
        return null;
    }

    if (integerRegExp.test(str)) {
        return new Literal({value: parseInt(str, 10)});
    } else if (numberRegExp.test(str)) {
        return new Literal({value: parseFloat(str)});
    } else {
        return new Expression({value: str});
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

    var forInit;
    var forTest;
    var forUpdate;

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
                if (depth === 0 && !loopType) {
                    loopType = 'ForEach';
                    finishVarName(token.start);
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
                        return {
                            error: 'Invalid native for loop. Expected format: <init>; <test>; <update>'
                        };
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
        }
    });

    finishPrevPart(str.length);

    if (loopType === 'ForEach') {
        var nameValue = varName.split(',');
        if (nameValue.length === 2) {
            nameVarName = new Identifier({name: nameValue[0]});
            valueVarName = new Identifier({name: nameValue[1]});
            loopType = 'ForEachProp';
        }
    }

    if (inExpression) {
        inExpression = new Expression({value: inExpression});
    }

    if (separatorExpression) {
        separatorExpression = new Expression({value: separatorExpression});
    }

    if (iteratorExpression) {
        iteratorExpression = new Expression({value: iteratorExpression});
    }

    if (fromExpression) {
        fromExpression = createNumberExpression(fromExpression);
    }

    if (toExpression) {
        toExpression = createNumberExpression(toExpression);
    }

    if (stepExpression) {
        stepExpression = createNumberExpression(stepExpression);
    }

    varName = new Identifier({name: varName});

    if (statusVarName) {
        statusVarName = new Identifier({name: statusVarName});
    }

    // No more tokens... now we need to sort out what happened
    if (loopType === 'ForEach') {
        return {
            'loopType': loopType,
            'varName': varName,
            'in': inExpression,
            'separator': separatorExpression,
            'statusVarName': statusVarName,
            'iterator': iteratorExpression
        };
    } else if (loopType === 'ForEachProp') {
        return {
            'loopType': loopType,
            'nameVarName': nameVarName,
            'valueVarName': valueVarName,
            'in': inExpression
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
            return {
                error: 'Invalid native for loop. Expected format: <init>; <test>; <update>'
            };
        }
        return {
            'loopType': loopType,
            'init': forInit,
            'test': forTest,
            'update': forUpdate
        };
    } else {
        return {
            'error': 'Invalid for loop'
        };
    }
};