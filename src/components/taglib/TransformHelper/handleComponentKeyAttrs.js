const keyPostfix = /:key$/;

module.exports = function handleComponentKeyAttrs() {
    var el = this.el;
    var context = this.context;

    // BEGIN support for deprecated for attributes

    let deprecatedForAttributes = ['for-ref', 'for-key', 'w-for'];

    deprecatedForAttributes.forEach(attributeName => {
        if (el.hasAttribute(attributeName)) {
            context.deprecate(`The "${attributeName}" tag is deprecated. Please use "for:key" instead.`);

            let incompatibleAttributes = ['for', 'for:key'].concat(deprecatedForAttributes.filter(a => a != attributeName)).filter(a => el.hasAttribute(a));
            if (incompatibleAttributes.length) {
                this.addError(`The "${attributeName}" tag cannot be used with "${incompatibleAttributes.join('" or "')}".`);
            } else {
                el.setAttributeValue('for:key', el.getAttributeValue(attributeName));
            }

            el.removeAttribute(attributeName);
        }
    });

    // END support for deprecated for attributes

    el.attributes.forEach(attribute => {
        if (keyPostfix.test(attribute.name)) {
            let unfixedName = attribute.name.replace(keyPostfix, '');
            el.removeAttribute(attribute.name);
            if (el.hasAttribute(unfixedName)) {
                this.addError(`The "${attribute.name}" attribute cannot be used in conjuction with the "${unfixedName}" attribute. (` + (el.pos ? context.getPosInfo(el.pos) : context.filename) + ')');
            } else {
                el.setAttributeValue(
                    unfixedName,
                    this.buildComponentElIdFunctionCall(attribute.value));
            }
        }
    });
};
