module.exports = function (el, context) {
    var path = el.getAttributeValue('require');
    el.detach();

    if (path.type === 'Literal') {
        context.addDependency(path.value, 'require');
    }
};