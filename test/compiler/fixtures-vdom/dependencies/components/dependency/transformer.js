module.exports = function (el, context) {
    el.detach();
    context.addDependency(eval(el.argument));
};