module.exports = {
    getInitialState: function(input) {
        return {
            size: input.size || 'normal',
            variant: input.variant || 'primary',
            className: input['class']
        };
    },

    getInitialBody: function(input) {
        return input.label || input.renderBody;
    },

    handleClick: function(event) {
        // Every Widget instance is also an EventEmitter instance.
        // We will emit a custom "click" event when a DOM click event
        // is triggered
        this.emit('click', {
            event: event // Pass along the DOM event in case it is helpful to others
        });
    },

    // Add any other methods here
    setVariant: function(variant) {
        this.setState('variant', variant);
    },

    setSize: function(size) {
        this.setState('size', size);
    },

    setLabel: function(label) {
        this.setState('label', label);
    }
};