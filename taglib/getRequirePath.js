var path = require('path');
var markoWidgetsDir = path.join(__dirname, '../');
var resolveFrom = require('resolve-from');

module.exports = function getRequirePath(target, template) {
    var relPath = target === 'marko-widgets' ?
        './' :
        '.' + target.substring(target.indexOf('/'));

    var resolvedTarget = resolveFrom(markoWidgetsDir, relPath);
    var requirePath = template.getRequirePath(resolvedTarget);
    return requirePath;
};