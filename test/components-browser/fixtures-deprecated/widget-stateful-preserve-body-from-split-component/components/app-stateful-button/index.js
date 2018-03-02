module.exports = require('marko/legacy-components').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialState: function (input) {
        return {
            size: input.size || 'normal',
            variant: input.variant || 'primary',
            className: input['class'],
            attrs: input['*']
        };
    },

    getInitialBody: function (input) {
        return input.label || input.renderBody;
    },
    getTemplateData: function (state, input) {
        var rootAttrs = {};

        var classParts = ['app-button'];

        var type = 'button';

        var variant = state.variant;
        if (variant !== 'primary') {
            classParts.push('app-button-' + variant);
        }

        var size = state.size;
        if (size !== 'normal') {
            classParts.push('app-button-' + size);
        }

        var className = state.className;
        if (className) {
            classParts.push(className);
        }

        var splatAttrs = state.attrs;
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
            rootAttrs: rootAttrs
        };
    },

    handleClick: function (event) {
        // Every Component instance is also an EventEmitter instance.
        // We will emit a custom "click" event when a DOM click event
        // is triggered
        this.emit('click', {
            event: event // Pass along the DOM event in case it is helpful to others
        });
    },

    // Add any other methods here
    setVariant: function (variant) {
        this.setState('variant', variant);
    },

    setSize: function (size) {
        this.setState('size', size);
    },

    setLabel: function (label) {
        this.setState('label', label);
    },

    getSize: function () {
        return this.state.size;
    }
});