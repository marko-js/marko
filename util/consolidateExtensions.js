function applyPeriodToExtension(extension) {
    if (extension.charAt(0) !== '.') {
        extension = '.' + extension;
    }
    return extension;
}

/**
 * Consolidate extension and extensions properties provided to node-require
 *
 * @param  {String} extension - Single extension
 * @param  {String[]} extensions - Array of extensions
 * @param  {Object} requireObj - Node.js require
 * @param  {Function} extensionFn - Function to set the function extension to
 */
module.exports = function(extension, extensions, requireObj, extensionFn) {
    if ((extension || (!extensions || !extensions.length)) && !requireObj.extensions[extension]) {
        extension = (extension && applyPeriodToExtension(extension)) || '.marko';
        requireObj.extensions[extension] = extensionFn;
    }

    if (extensions && extensions.length) {
        extensions.forEach((extension) => {
            extension = applyPeriodToExtension(extension);
            if (!requireObj.extensions[extension]) {
                requireObj.extensions[extension] = extensionFn;
            }
        });
    }
};
