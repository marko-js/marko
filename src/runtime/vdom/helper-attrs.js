var complain = "MARKO_DEBUG" && require("complain");

/**
 * Helper for processing dynamic attributes
 */
module.exports = function(attributes) {
    if (typeof attributes === "string") {
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
            complain(
                "Passing a string as a dynamic attribute value is deprecated - More details: https://github.com/marko-js/marko/wiki/Deprecation:-String-as-dynamic-attribute-value"
            );
        }
        return parseAttrs(attributes);
    }

    if (attributes && (attributes.style || attributes.class)) {
        var newAttributes = {};
        Object.keys(attributes).forEach(function(name) {
            if (name === "class") {
                newAttributes[name] = classAttr(attributes[name]);
            } else if (name === "style") {
                newAttributes[name] = styleAttr(attributes[name]);
            } else {
                newAttributes[name] = attributes[name];
            }
        });
        return newAttributes;
    }
    return attributes;
};

var styleAttr = require("./helper-styleAttr");
var classAttr = require("./helpers").ca;
var parseContainer;
function parseAttrs(str) {
    if (str === "") {
        return {};
    }

    parseContainer = parseContainer || document.createElement("div");
    parseContainer.innerHTML = "<a " + str + ">";
    var attrs = parseContainer.firstChild.attributes;
    var result = {};
    var attr;

    for (var len = attrs.length, i = 0; i < len; i++) {
        attr = attrs[i];
        result[attr.name] = attr.value;
    }

    return result;
}
