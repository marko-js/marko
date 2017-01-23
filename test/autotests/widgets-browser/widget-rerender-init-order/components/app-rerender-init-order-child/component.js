module.exports = {
    onInput: function(input) {
        this.state = {
            version: input.version,
            id: input.id
        };
    },
    getTemplateData: function(state, input) {
        return {
            version: state.version,
            id: state.id
        };
    },
    onMount: function() {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder.push(this.state.id);
    },
    onUpdate: function() {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder.push(this.state.id);
    }
};