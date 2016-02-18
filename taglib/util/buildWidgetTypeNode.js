var tryRequire = require('try-require');
var raptorModulesResolver = tryRequire('raptor-modules/resolver', require);
var ok = require('assert').ok;

module.exports = function buildWidgetTypeNode(path, from, builder) {
    ok(typeof path === 'string', '"path" should be a string');
    ok(typeof from === 'string', '"from" should be a string');

    var typeName;

    if (raptorModulesResolver) {
        var resolved = raptorModulesResolver.resolveRequire(path, from);
        typeName = resolved.logicalPath;
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