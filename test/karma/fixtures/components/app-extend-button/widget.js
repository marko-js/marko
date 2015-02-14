function Widget(config) {
    this.label = config.label;
    var name = config.name;

    window.testData.addWidget(name, this);
}

Widget.prototype = {
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
        // First remove all of the variant classes (this could be optimized)
        this.$().removeClass('app-button-secondary');

        // Then add the variant class (unless it is the default 'primary' variant)
        if (variant !== 'primary') {
            this.$().addClass('app-button-' + variant);
        }
    }
};

exports.Widget = Widget;