var ExpressionParser = require('./ExpressionParser');

function registerCustomExpressionHandler(name, func) {
    ExpressionParser.custom[name] = func;
}

exports.registerCustomExpressionHandler = registerCustomExpressionHandler;