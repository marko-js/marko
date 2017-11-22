module.exports = function (el, context) {
    var builder = context.builder;
    var fooValue = el.getAttributeValue('foo');

    el.insertSiblingAfter(builder.var('foo', fooValue));
};