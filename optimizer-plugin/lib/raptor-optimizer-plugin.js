module.exports = function(optimizer, config) {
    optimizer.dependencies.registerPackageType('rhtml', require('./dependency-rhtml'));
};