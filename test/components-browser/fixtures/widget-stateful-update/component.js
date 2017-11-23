module.exports = {
    onInput: function (input) {
        this.state = {
            size: input.size || 'normal',
            variant: input.variant || 'primary'
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

    getSize: function () {
        return this.state.size;
    }
};