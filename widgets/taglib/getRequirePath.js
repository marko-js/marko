var resolveFrom = require('resolve-from');
require('require-self-ref');
require('~/test/util/patch-module');

module.exports = function getRequirePath(target, context) {
    var resolvedTarget = resolveFrom(context.dirname, target);
    if (!resolvedTarget) {
        throw new Error('Unable to resolve "' + target + '" from "' + context.dirname + '"');
    }
    var requirePath = context.getRequirePath(resolvedTarget);
    return requirePath;
};