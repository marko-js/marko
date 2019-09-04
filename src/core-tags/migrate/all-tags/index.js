const commonMigrators = [
    require("./control-flow-directives"),
    require("./body-only-if"),
    require("./partial-dynamic-tag"),
    require("./dynamic-attributes"),
    require("./include-directive"),
    require("./legacy-nested-tag"),
    require("./legacy-nested-tag"),
    require("./marko-init"),
    require("./modifier-key"),
    require("./params"),
    require("./ref"),
    require("./w-bind"),
    require("./w-body"),
    require("./w-config"),
    require("./w-for"),
    require("./w-id"),
    require("./w-on"),
    require("./w-preserve"),
    require("./w-preserve-attrs"),
    require("./widget-in-attrs")
];

module.exports = function(el, context) {
    if (el.detachNode) {
        return false;
    }
    commonMigrators.forEach(migrator => migrator(el, context));
    return true;
};
