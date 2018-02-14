module.exports = function (el, codegen) {
    var fooVar = codegen.importModule('foo', './foo');
    return codegen.builder.functionCall(fooVar, []);
};