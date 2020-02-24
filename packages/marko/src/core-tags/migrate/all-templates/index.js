const commonMigrators = [
    require("./non-standard-template-literals"),
    require("./render-calls"),
    require("./widget-data-is-state"),
    require("./widget-get-template-data")
];

module.exports = function(root, context) {
    commonMigrators.forEach(migrator => migrator(root, context));
    return true;
};
