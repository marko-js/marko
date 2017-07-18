'use strict';

const keySuffix = ':key';

module.exports = function handleComponentKeyAttrs() {
    let el = this.el;
    let context = this.context;

    const filePosition = el.pos ? context.getPosInfo(el.pos) : context.filename;

    // BEGIN support for deprecated for attributes

    let deprecatedForAttributes = ['for-ref', 'for-key', 'w-for'];

    deprecatedForAttributes.forEach(attributeName => {
        if (el.hasAttribute(attributeName)) {
            context.deprecate(`The "${attributeName}" tag is deprecated. Please use "for:key" instead.`);

            let incompatibleAttributes = ['for', 'for:key']
                .concat(deprecatedForAttributes.filter(a => a != attributeName))
                .filter(a => el.hasAttribute(a));

            if (incompatibleAttributes.length) {
                this.addError(`The "${attributeName}" tag cannot be used with "${incompatibleAttributes.join('" or "')}". (${filePosition})`);
            } else {
                el.setAttributeValue('for:key', el.getAttributeValue(attributeName));
            }

            el.removeAttribute(attributeName);
        }
    });

    // END support for deprecated for attributes

    el.attributes.forEach(attribute => {
        const attributeName = attribute.name;

        if (attributeName && attributeName !== keySuffix && attributeName.endsWith(keySuffix)) {
            const unfixedName = attributeName.replace(keySuffix, '');

            el.removeAttribute(attributeName);
            if (el.hasAttribute(unfixedName)) {
                this.addError(`The "${attributeName}" attribute cannot be used in conjuction with the "${unfixedName}" attribute. (${filePosition})`);
            } else {
                el.setAttributeValue(
                    unfixedName,
                    this.buildComponentElIdFunctionCall(attribute.value));
            }
        }
    });
};
