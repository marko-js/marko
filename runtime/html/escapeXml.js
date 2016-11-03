var elTest = /[&<]/;
var elTestReplace = /[&<]/g;
var attrTest = /[&<\"\n]/;
var attrReplace = /[&<\"\n]/g;
var replacements = {
    '<': '&lt;',
    '&': '&amp;',
    '"': '&quot;',
    '\n': '&#10;' //Preserve new lines so that they don't get normalized as space
};

function replaceChar(match) {
    return replacements[match];
}

function escapeXml(str) {
    // check for most common case first
    if (typeof str === 'string') {
        return elTest.test(str) ? str.replace(elTestReplace, replaceChar) : str;
    }

    return (str == null) ? '' : str.toString();
}

function escapeXmlAttr(str) {
    if (typeof str === 'string') {
        return attrTest.test(str) ? str.replace(attrReplace, replaceChar) : str;
    }

    return (str == null) ? '' : str.toString();
}


module.exports = escapeXml;
escapeXml.attr = escapeXmlAttr;