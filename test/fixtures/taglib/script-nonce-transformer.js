module.exports = function transform(node, compiler, template) {
    if (node.hasAttribute('csp-nonce')) {

        node.removeAttribute('csp-nonce');

        node.setAttribute('nonce', template.makeExpression('"foo"'));
    }
};