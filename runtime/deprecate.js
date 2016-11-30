var logger = typeof console !== 'undefined' && console.warn && console;
var messageCounts = {};

module.exports = function(o, methodName, message) {
    if (!logger) return;

    var originalMethod = o[methodName];

    o[methodName] = function() {
        var remainingWarns = warn(message);

        if (!remainingWarns) {
            o[methodName] = originalMethod;
        }

        return originalMethod.apply(this, arguments);
    };
};

module.exports.warn = warn;

function warn(message) {
    if (!logger) return 0;

    var maxWarn = 20;
    var stack;
    messageCounts[message] = messageCounts[message] || 0;

    if (messageCounts[message] < maxWarn) {
        messageCounts[message]++;
        try {
            stack = new Error().stack.split('\n').slice(4).join('\n');
        } catch(e) {}
        logger.warn(red('WARNING!!') + '\n' + message + '\n' + grey(stack || ''));
    }

    return maxWarn - messageCounts[message];
}

var canFormat = (function () {
    try {
        if (process.stdout && !process.stdout.isTTY) {
            return false;
        }

        if (process.platform === 'win32') {
            return true;
        }

        if ('COLORTERM' in process.env) {
            return true;
        }

        if (process.env.TERM === 'dumb') {
            return false;
        }

        if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
            return true;
        }
    } catch(e){}

    return false;
})();

function format(str, begin, end) {
    begin = canFormat ? '\u001b['+begin+'m' : '';
    end = canFormat ? '\u001b['+end+'m' : '';
    return begin + str + end;
}

function red(str) {
    return format(str, 31, 39);
}

function grey(str) {
    return format(str, 90, 39);
}