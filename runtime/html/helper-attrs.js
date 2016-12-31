var attrHelper = require('./helper-attr');

function attrs(arg) {
    if (typeof arg === 'object') {
        var out = '';
        for (var attrName in arg) {
            out += attrHelper(attrName, arg[attrName]);
        }
        return out;
    } else if (typeof arg === 'string') {
        return arg;
    }
    return '';
}

module.exports = attrs;