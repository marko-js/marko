"use strict";

const scopedSuffix = ":scoped";

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

        if (
            attributeName !== scopedSuffix &&
            attributeName.endsWith(scopedSuffix)
        ) {
            const finalAttributeName = attributeName.slice(
                0,
                0 - scopedSuffix.length
            );

            if (el.hasAttribute(finalAttributeName)) {
                this.addError(
                    `The "${attributeName}" attribute cannot be used in conjunction with the "${finalAttributeName}" attribute. (${filePosition})`
                );
                return;
            }

            el.removeAttribute(attributeName);
            el.setAttributeValue(
                finalAttributeName,
                this.buildComponentElIdFunctionCall(attribute.value)
            );
        }
    });
};
