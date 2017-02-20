var tryRequire = require('try-require');
var lassoModulesClientTransport = tryRequire('lasso-modules-client/transport', require);
var resolveFrom = tryRequire('resolve-from', require);
var nodePath = require('path');
var ok = require('assert').ok;

module.exports = function buildComponentTypeNode(path, from, def, transformHelper) {
    ok(typeof path === 'string', '"path" should be a string');
    ok(typeof from === 'string', '"from" should be a string');

    var context = transformHelper.context;

    var builder = context.builder;

    var registerComponent = context.addStaticVar('marko_registerComponent',
        builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('rw')));

    var typeName;

    if (lassoModulesClientTransport) {
        var targetPath = resolveFrom(from, path);
        if (!targetPath) {
            throw new Error('Component module not found: ' + path + ' (from ' + from + ')');
        }
        typeName = lassoModulesClientTransport.getClientPath(targetPath);
    } else {
        typeName = nodePath.resolve(from, path);
    }

    if (!def) {
        var returnValue = builder.require(builder.literal(path));

        if (transformHelper.isLegacyComponent) {
            var defineComponent = context.addStaticVar('marko_defineComponent',
                builder.memberExpression(transformHelper.markoComponentsVar, builder.identifier('w')));

            returnValue = builder.functionCall(defineComponent, [returnValue]);
        }

        def = builder.functionDeclaration(null, [] /* params */, [
            builder.returnStatement(returnValue)
        ]);
    }

    return builder.functionCall(registerComponent, [
        builder.literal(typeName),
        def
    ]);
};