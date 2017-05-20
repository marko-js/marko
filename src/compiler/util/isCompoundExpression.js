function isCompoundExpression(expression) {
    if (typeof expression === 'string') {
        // TBD: Should we use Esprima to parse the expression string to see if it is a compount expression?
        return true;
    }

    return expression.isCompoundExpression();
}

module.exports = isCompoundExpression;