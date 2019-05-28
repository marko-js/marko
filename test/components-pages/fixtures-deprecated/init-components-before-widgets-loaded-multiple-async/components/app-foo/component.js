module.exports = {
    onInput: function() {
        var parent = {
            child: {}
        };

        parent.child.parent = parent;

        this.state = {
            name: "app-foo",
            parent: parent
        };
    },

    onMount: function() {
        if (!window.fooComponents) {
            window.fooComponents = [];
        }
        window.fooComponents.push(this);
    }
};
