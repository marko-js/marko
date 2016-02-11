var esprima = require('esprima');

function parseJavaScriptIdentifier(src, requireQuotes) {
    var program = esprima.parse(src);
    if (program.body.length === 1) {
        var expressionStatement = program.body[0];
        if (expressionStatement.type === 'ExpressionStatement') {
            var expression = expressionStatement.expression;
            if (expression.type === 'Literal') {
                var value = expression.value;
                if (typeof value === 'string') {
                    return value;
                }
            } else if (requireQuotes !== true && expression.type === 'Identifier') {
                return expression.name;
            }
        }
    }

    return undefined;
}

module.exports = parseJavaScriptIdentifier;