var warp10 = require('warp10');

var escape = require('./escape');
var escapeString = escape.escapeString;
var escapeXmlAttr = escape.escapeXmlAttr;

var stringifiedAttrTest = /[&\'\n]/;
var stringifiedAttrReplace = /[&\'\n]/g;

function attr(name, value, shouldEscape) {
    shouldEscape = shouldEscape !== false;

    if (typeof value === 'string') {
        return ' ' + name + '="' + (shouldEscape ? escapeXmlAttr(value) : value) + '"';
    } else if (value === true) {
        return ' ' + name;
    } else if (value == null || value === false) {
        return '';
    } else if (typeof value === 'object') {
        if (name.substring(0, 6) === 'data-_') {
            value = warp10.stringify(value);
        } else {
            value = JSON.stringify(value);
        }
        return ' ' + name + "='" + escapeString(value, stringifiedAttrTest, stringifiedAttrReplace) + "'";
    } else {
        return ' ' + name + '=' + value; // number (doesn't need quotes)
    }
}

module.exports = attr;