var tryRequire = require('try-require');
var raptorModulesResolver = tryRequire('raptor-modules/resolver');

module.exports = function getClientWidgetPath(targetModuleFile) {
    if (raptorModulesResolver) {
        var from = this.template.dirname;
        var resolved = raptorModulesResolver.resolveRequire(targetModuleFile, from);
        return resolved.logicalPath;
    } else {
        return targetModuleFile;
    }
};