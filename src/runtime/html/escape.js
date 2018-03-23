var elTest = /[&<]/;
var elTestReplace = /[&<]/g;
var attrTest = /[&<"\n]/;
var attrReplace = /[&<"\n]/g;

var replacements = {
    "<": "&lt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
    "\n": "&#10;" //Preserve new lines so that they don't get normalized as space
};

function replaceChar(match) {
    return replacements[match];
}

function escapeString(str, regexpTest, regexpReplace) {
    return regexpTest.test(str) ? str.replace(regexpReplace, replaceChar) : str;
}

function escapeXmlHelper(value, regexpTest, regexpReplace) {
    // check for most common case first
    if (typeof value === "string") {
        return escapeString(value, regexpTest, regexpReplace);
    } else if (value == null) {
        return "";
    } else if (typeof value === "object") {
        if (value.toHTML) {
            return value.toHTML();
        }
    } else if (value === true || value === false || typeof value === "number") {
        return value.toString();
    }

    return escapeString(value.toString(), regexpTest, regexpReplace);
}

function escapeXml(value) {
    return escapeXmlHelper(value, elTest, elTestReplace);
}

function escapeXmlAttr(value) {
    return escapeXmlHelper(value, attrTest, attrReplace);
}

exports.escapeString = escapeString;
exports.escapeXml = escapeXml;
exports.escapeXmlAttr = escapeXmlAttr;
