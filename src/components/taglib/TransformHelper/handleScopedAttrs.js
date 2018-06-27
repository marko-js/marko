"use strict";

const deprecatedKeySuffix = ":key";
const scopedSuffix = ":scoped";
const deprecatedAttrs = {
    "for-ref": true,
    "for-key": true,
    "w-for": true
};

module.exports = function handleComponentKeyAttrs() {
    let el = this.el;
    let context = this.context;
    const filePosition = el.pos ? context.getPosInfo(el.pos) : context.filename;

    var attrs = el.attributes.concat([]);

    attrs.forEach(attribute => {
        const attributeName = attribute.name;
        if (!attributeName) {
            return;
        }

        let fixedAttributeName = attributeName;

        // BEGIN support for deprecated for attributes
        if (deprecatedAttrs[attributeName]) {
            context.deprecate(
                `The "${attributeName}" attribute is deprecated. Please use "for:key" instead.`
            );

            let incompatibleAttributes = ["for", "for:key"]
                .concat(
                    Object.keys(deprecatedAttrs).filter(a => a != attributeName)
                )
                .filter(a => el.hasAttribute(a));

            if (incompatibleAttributes.length) {
                this.addError(
                    `The "${attributeName}" attribute cannot be used in conjunction with "${incompatibleAttributes.join(
                        '" or "'
                    )}". (${filePosition})`
                );
                return;
            } else {
                fixedAttributeName = "for:scoped";
            }
        } else if (
            attributeName !== deprecatedKeySuffix &&
            attributeName.endsWith(deprecatedKeySuffix)
        ) {
            context.deprecate(
                `The "${attributeName}" attribute is deprecated. Please use "for:scoped" instead.`
            );
            fixedAttributeName =
                attributeName.slice(0, 0 - deprecatedKeySuffix.length) +
                ":scoped";
        }
        // END support for deprecated for attributes

        if (
            fixedAttributeName !== scopedSuffix &&
            fixedAttributeName.endsWith(scopedSuffix)
        ) {
            el.removeAttribute(attributeName);

            let finalAttributeName = fixedAttributeName.slice(
                0,
                0 - scopedSuffix.length
            );

            if (el.hasAttribute(finalAttributeName)) {
                this.addError(
                    `The "${attributeName}" attribute cannot be used in conjunction with the "${finalAttributeName}" attribute. (${filePosition})`
                );
                return;
            }

            el.setAttributeValue(
                finalAttributeName,
                this.buildComponentElIdFunctionCall(attribute.value)
            );
        }
    });
};
