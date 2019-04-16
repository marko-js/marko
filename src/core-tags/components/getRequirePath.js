var resolveFrom = require("resolve-from");

module.exports = function getRequirePath(target, context) {
    if (target === "marko" || target.startsWith("marko/")) {
        return target;
    }

    var resolvedTarget = resolveFrom(context.dirname, target);
    if (!resolvedTarget) {
        throw new Error(
            'Unable to resolve "' + target + '" from "' + context.dirname + '"'
        );
    }
    var requirePath = context.getRequirePath(resolvedTarget);
    return requirePath;
};
