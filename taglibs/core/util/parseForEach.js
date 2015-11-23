var forEachRegEx = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s+in\s+(.+)$/;
var forEachPropRegEx = /^\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*,\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s+in\s+(.+)$/;
var forRangeRegEx = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s+from\s+(.+)$/; // i from 0 to 10  or  i from 0 to 10 step 5
var forRangeKeywordsRegExp = /"(?:[^"]|\\")*"|'(?:[^']|\\')*'|\s+(to|step)\s+/g;
var integerRegExp = /^-?\d+$/;
var numberRegExp = /^-?(?:\d+|\d+\.\d*|\d*\.\d+|\d+\.\d+)$/;

function convertNumber(str) {
    if (!str) {
        return str;
    }

    if (integerRegExp.test(str)) {
        return parseInt(str, 10);
    } else if (numberRegExp.test(str)) {
        return parseFloat(str);
    } else {
        return str;
    }
}

module.exports = function(value) {
    var match = value.match(forEachRegEx);
    if (match) {
        return {
            'varName': match[1],
            'target': match[2]
        };
    } else if ((match = value.match(forEachPropRegEx))) {


        return {
            'nameVar': match[1],
            'valueVar': match[2],
            'target': match[3]
        };
    } else if ((match = value.match(forRangeRegEx))) {
        var nameVar = match[1];


        var remainder = match[2];
        var rangeMatches;

        var fromStart = 0;
        var fromEnd = -1;

        var toStart = -1;
        var toEnd = remainder.length;

        var stepStart = -1;
        var stepEnd = -1;

        while ((rangeMatches = forRangeKeywordsRegExp.exec(remainder))) {
            if (rangeMatches[1] === 'to') {
                fromEnd = rangeMatches.index;
                toStart = forRangeKeywordsRegExp.lastIndex;
            } else if (rangeMatches[1] === 'step') {
                if (toStart === -1) {
                    continue;
                }
                toEnd = rangeMatches.index;
                stepStart = forRangeKeywordsRegExp.lastIndex;
                stepEnd = remainder.length;
            }
        }

        if (toStart === -1 || fromEnd === -1) {
            throw new Error('Invalid each attribute of "' + value + '"');
        }

        var from = remainder.substring(fromStart, fromEnd).trim();
        var to = remainder.substring(toStart, toEnd).trim();
        var step;

        from = convertNumber(from);
        to = convertNumber(to);

        if (stepStart !== -1) {
            step = remainder.substring(stepStart, stepEnd).trim();
            step = convertNumber(step);
        } else {
            if (typeof from === 'number' && typeof to === 'number') {
                if (from < to) {
                    step = 1;
                } else {
                    step = -1;
                }
            } else {
                step = 1;
            }

        }

        return {
            'varName': nameVar,
            'from': from,
            'to': to,
            'step': step
        };
    } else {
        throw new Error('Invalid each attribute of "' + value + '"');
    }

};