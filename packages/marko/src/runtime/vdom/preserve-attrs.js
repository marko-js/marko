var extend = require("raptor-util/extend");

function removePreservedAttributes(attrs, props) {
  var preservedAttrs = props && props.pa;
  if (preservedAttrs) {
    attrs = extend({}, attrs);
    preservedAttrs.forEach(function (preservedAttrName) {
      delete attrs[preservedAttrName];
    });
  }

  return attrs;
}

require("./VElement").___removePreservedAttributes = removePreservedAttributes;
