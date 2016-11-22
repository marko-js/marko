var warp10Parse = require('warp10/parse');

module.exports = function getObjectAttribute(el, attrName) {
    var virtualAttrs = el._vattrs;

    if (virtualAttrs) {
        return el._vattrs[attrName];
    } else {
        var attrValue = el.getAttribute(attrName);
        if (attrValue) {
            return warp10Parse(attrValue);
        }
    }
};