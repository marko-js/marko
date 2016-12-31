/**
 * Helper for generating the string for a style attribute
 * @param  {[type]} style [description]
 * @return {[type]}       [description]
 */
module.exports = function(style) {
    if (!style) {
        return null;
    }

    if (typeof style === 'string') {
        return style;
    } else if (typeof style === 'object') {
        var parts = [];
        for (var name in style) {
            if (style.hasOwnProperty(name)) {
                var value = style[name];
                if (value) {
                    parts.push(name + ':' + value);
                }
            }
        }
        return parts ? parts.join(';') : null;
    } else {
        return null;
    }
};