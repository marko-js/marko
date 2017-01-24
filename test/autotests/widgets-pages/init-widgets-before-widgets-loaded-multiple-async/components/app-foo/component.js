module.exports = {
    onInput: function(input) {
        var parent = {
            child: {
            }
        };

        parent.child.parent = parent;

        this.state = {
            name: 'app-foo',
            parent: parent
        };
    },

    onMount: function(widgetConfig) {
        if (!window.fooWidgets) {
            window.fooWidgets = [];
        }
        window.fooWidgets.push(this);
    }
};