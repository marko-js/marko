'use strict';

function create(tokens) {
    function getToken(matches) {
        for (var i=0; i<tokens.length; i++) {
            let tokenValue = matches[i + 1];
            if (tokenValue != null) {
                var tokenDef = tokens[i];
                return {
                    start: matches.index,
                    end: matches.index + matches[0].length,
                    name: tokenDef.name,
                    value: tokenValue
                };
            }
        }
    }

    var tokensRegExp = new RegExp(tokens
        .map((token) => {
            return '(' + token.pattern.source + ')';
        })
        .join('|'), 'g');

    return {
        forEachToken: function(value, callback, thisObj) {
            tokensRegExp.lastIndex = 0; // Start searching from the beginning again
            var matches;
            while ((matches = tokensRegExp.exec(value))) {
                let token = getToken(matches);
                callback.call(this, token);
            }
        }
    };
}

exports.create = create;