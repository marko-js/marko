var expect = require('chai').expect;

module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),
    getInitialProps: function(input) {
        expect(input.getInitialPropsCalled).to.be.a('undefined');
        input.getInitialPropsCalled = true;
        return input;
    },
    getInitialBody: function(input) {
        return input.label || input.renderBody;
    },
    getTemplateData: function(state, input) {
        expect(input.getInitialPropsCalled).to.equal(true);

        var rootAttrs = {};
        var attrs = input['*'];
        var className = input['class'];

        var classParts = ['app-button'];

        var type = 'button';

        var variant = input.variant;
        if (variant !== 'primary') {
            classParts.push('app-button-' + variant);
        }

        var size = input.size;
        if (size !== 'normal') {
            classParts.push('app-button-' + size);
        }

        if (className) {
            classParts.push(className);
        }

        var splatAttrs = attrs;
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

    handleClick: function(event) {
        // Every Widget instance is also an EventEmitter instance.
        // We will emit a custom "click" event when a DOM click event
        // is triggered
        this.emit('click', {
            event: event // Pass along the DOM event in case it is helpful to others
        });
    }
});