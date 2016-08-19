var logger = typeof console !== 'undefined' && console.warn && console;

module.exports = function(o, methodName, message) {
    if (!logger) {
        return;
    }

    var originalMethod = o[methodName];

    var maxWarn = 20;
    var currentWarn = 0;

    o[methodName] = function() {
        if (currentWarn < maxWarn) {
            if (++currentWarn === maxWarn) {
                o[methodName] = originalMethod;
            }
            logger.warn(message, 'Stack: ' + new Error().stack);
        }

        return originalMethod.apply(o, arguments);
    };
};