module.exports = {
    onInput: function(input) {
        this.state = {
            version: input.version
        };
    },
    getTemplateData: function(state, input) {
        return {
            version: state.version
        };
    },
    onMount: function() {
        window.rerenderInitOrder.push('parent');
    },
    onUpdate: function() {
        window.rerenderInitOrder.push('parent');
    }
};