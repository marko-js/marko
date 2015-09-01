var raptorModulesUtil = require('raptor-modules/util');

var dynamicClientWidgetPathCache = {};

module.exports = function getDynamicClientWidgetPath(targetModuleFile) {
    if (!targetModuleFile) {
        return null;
    }

    var clientPath = dynamicClientWidgetPathCache[targetModuleFile];
    if (!clientPath) {
        var resolved = raptorModulesUtil.getPathInfo(targetModuleFile);
        clientPath = dynamicClientWidgetPathCache[targetModuleFile] = resolved.logicalPath;
    }
    return clientPath;
};