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

    onMount: function(componentConfig) {
        if (!window.fooComponents) {
            window.fooComponents = [];
        }
        window.fooComponents.push(this);
    }
};