var extend = require('raptor-util/extend');

function removePreservedAttributes(attrs, clone) {
    var preservedAttrs = attrs['data-_noupdate'];
    if (preservedAttrs) {
        if (typeof preservedAttrs == 'string') {
            preservedAttrs = JSON.parse(preservedAttrs);
        }

        if (clone) {
            attrs = extend({}, attrs);
        }
        preservedAttrs.forEach(function(preservedAttrName) {
            delete attrs[preservedAttrName];
        });
    }

    return attrs;
}

require('./VElement').$__removePreservedAttributes = removePreservedAttributes;
