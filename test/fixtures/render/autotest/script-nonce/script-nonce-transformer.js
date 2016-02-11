module.exports = function transform(el, context) {
    if (el.hasAttribute('csp-nonce')) {

        el.removeAttribute('csp-nonce');

        el.setAttributeValue('nonce', context.builder.literal('foo'));
    }
};