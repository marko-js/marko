module.exports = function transform(el, context) {
    if (el.isFlagSet('testFlag')) {
        el.setAttributeValue('FLAG_SET', context.builder.literalTrue());
    }
};