module.exports = {
    getTemplateData: function(state, input) {
        var rootAttrs = {};

        var classParts = ['app-button'];

        var type = 'button';

        var variant = input.variant || 'primary';
        if (variant !== 'primary') {
            classParts.push('app-button-' + variant);
        }

        var size = input.size || 'normal';
        if (size !== 'normal') {
            classParts.push('app-button-' + size);
        }

        var className = input['class'];
        if (className) {
            classParts.push(className);
        }

        var splatAttrs = input['*'];
        if (splatAttrs) {
            for (var splatAttr in splatAttrs) {
                if (splatAttrs.hasOwnProperty(splatAttr)) {
                    rootAttrs[splatAttr] = splatAttrs[splatAttr];
                }
            }
        }

        rootAttrs['class'] = classParts.join(' ');

        return {
            type: type,
            rootAttrs: rootAttrs,
            body: input.label || input.renderBody
        };
    }
};