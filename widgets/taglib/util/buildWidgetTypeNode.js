var tryRequire = require('try-require');
var lassoModulesClientTransport = tryRequire('lasso-modules-client/transport', require);
var resolveFrom = tryRequire('resolve-from', require);

var ok = require('assert').ok;

module.exports = function buildWidgetTypeNode(path, from, def, transformHelper) {
    ok(typeof path === 'string', '"path" should be a string');
    ok(typeof from === 'string', '"from" should be a string');

    var context = transformHelper.context;

    var builder = context.builder;

    var registerWidget = context.addStaticVar('marko_registerWidget',
        builder.memberExpression(transformHelper.markoWidgetsVar, builder.identifier('rw')));

    var typeName;

    if (lassoModulesClientTransport) {
        var targetPath = resolveFrom(from, path);
        if (!targetPath) {
            throw new Error('Widget module not found: ' + path + ' (from ' + from + ')');
        }
        typeName = lassoModulesClientTransport.getClientPath(targetPath);
    } else {
        typeName = path;
    }

    if (!def) {
        var returnValue = builder.require(builder.literal(path));

        if (transformHelper.isLegacyWidget) {
            var defineWidget = context.addStaticVar('marko_defineWidget',
                builder.memberExpression(transformHelper.markoWidgetsVar, builder.identifier('w')));

            returnValue = builder.functionCall(defineWidget, [returnValue]);
        }

        def = builder.functionDeclaration(null, [] /* params */, [
            builder.returnStatement(returnValue)
        ]);
    }

    return builder.functionCall(registerWidget, [
        builder.literal(typeName),
        def
    ]);
};