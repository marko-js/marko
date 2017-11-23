module.exports = function transform(el, context) {
    var div = context.builder.htmlElement('div', {
        replaced: context.builder.literal('test-replaceWith')
    });

    el.replaceWith(div);
};