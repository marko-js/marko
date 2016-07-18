module.exports = function transform(el, context) {
    el.removeAttribute('foo');
    el.setAttributeValue('bar', context.builder.literal('hello'));
};