var tryRequire = require('try-require');
var lassoModulesClientTransport = tryRequire('lasso-modules-client/transport', require);

var resolveFrom = tryRequire('resolve-from', require);
var ok = require('assert').ok;

module.exports = function buildWidgetTypeNode(path, from, builder) {
    ok(typeof path === 'string', '"path" should be a string');
    ok(typeof from === 'string', '"from" should be a string');

    var typeName;

    if (lassoModulesClientTransport) {
        var targetPath = resolveFrom(from, path);
        typeName = lassoModulesClientTransport.getClientPath(targetPath);
    } else {
        typeName = path;
    }

    return builder.literal({
        name: builder.literal(typeName),
        def: builder.functionDeclaration(null, [] /* params */, [
            builder.returnStatement(builder.require(builder.literal(path)))
        ])
    });
};