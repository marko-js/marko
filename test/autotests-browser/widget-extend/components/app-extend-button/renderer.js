var template = require('marko').load(require.resolve('./template.marko'));

exports.render = function(input, out) {

    var rootAttrs = {};

    // The logic to determine the class names to apply to the root
    // element is relatively complex since it is based on the 'variant'
    // and the 'size' input so we are going to build the class names
    // in JavaScript instead of in the template.
    var classParts = ['app-extend-button'];

    var type = 'button';

    var variant = input.variant;
    if (variant && variant !== 'primary') {
        classParts.push('app-extend-button-' + variant);
    }

    var size = input.size;
    if (size && size !== 'normal') {
        classParts.push('app-extend-button-' + size);
    }

    var splatAttrs = input['*'];
    if (splatAttrs) {
        var className = splatAttrs['class'];
        if (className) {
            delete splatAttrs['class'];
            classParts.push(className);
        }

        for (var splatAttr in splatAttrs) {
            if (splatAttrs.hasOwnProperty(splatAttr)) {
                rootAttrs[splatAttr] = splatAttrs[splatAttr];
            }
        }
    }

    rootAttrs['class'] = classParts.join(' ');

    template.render({
        widgetConfig: {
            name: input.name,
            label: input.label
        },
        type: type,
        renderBody: input.renderBody, // renderBody is a function we can use to render nested
                                      // content. will be undefined if no nested content.
        label: input.label, // The button label can come from nested content or the label attribute
        rootAttrs: rootAttrs
    }, out);
};

