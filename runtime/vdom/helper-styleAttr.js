var dashedNames = {};

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
        var styles = '';
        for (var name in style) {
            var value = style[name];
            if (value) {
                var nameDashed = dashedNames[name];
                if (!nameDashed) {
                    nameDashed = dashedNames[name] = name.replace(/([A-Z])/g, '-$1').toLowerCase();
                }
                styles += nameDashed + ':' + value + ';';
            }
        }
        return styles || null;
    } else {
        return null;
    }
};