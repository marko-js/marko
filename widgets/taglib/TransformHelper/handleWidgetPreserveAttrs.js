const NO_UPDATE_ATTR_SUFFIX = ':no-update';

function handleWidgetPreserveAttrs() {
    var el = this.el;
    var context = this.context;
    var builder = context.builder;

    var noUpdateAttrs = [];

    el.forEachAttribute(function(attr) {
        var attrName = attr.name;

        if (attrName && attrName.endsWith(NO_UPDATE_ATTR_SUFFIX)) {
            var attrIndex = attrName.indexOf(NO_UPDATE_ATTR_SUFFIX);
            var attrValue = el.getAttributeValue(attrName);

            // Set the attribute value for the real attribute name without the
            // :no-update suffix, and remove the :no-update suffix attribute
            var realAttr = attrName.substr(0, attrIndex);
            el.setAttributeValue(realAttr, attrValue);
            el.removeAttribute(attrName);

            noUpdateAttrs.push(realAttr);
        } else if (attrName === 'w-preserve-attrs') {
            context.deprecate(`The 'w-preserve-attrs' attribute is deprecated. Please use the ':no-update' attribute instead.`);

            var preserveAttrsExpression = el.getAttributeValue('w-preserve-attrs');

            noUpdateAttrs.push.apply(noUpdateAttrs, preserveAttrsExpression.value.split(','));
            el.removeAttribute('w-preserve-attrs');
        }
    });

    if (noUpdateAttrs.length) {
        el.setAttributeValue('data-_noupdate', builder.literal(noUpdateAttrs));
    }
}

module.exports = handleWidgetPreserveAttrs;
