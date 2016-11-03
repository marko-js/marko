var escapeXmlAttr = require('./escapeXml').attr;

module.exports = function(name, value, shouldEscape) {
    if (typeof value === 'string') {
        return ' ' + name + '="' + (shouldEscape !== false ? escapeXmlAttr(value) : value) + '"';
    } else if (value === true) {
        return ' ' + name;
    } else if (value == null || value === false) {
        return '';
    } else {
        return ' ' + name + '="' + value.toString() + '"';
    }
};
