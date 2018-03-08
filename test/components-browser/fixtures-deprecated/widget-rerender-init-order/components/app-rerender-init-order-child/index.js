module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    getInitialState: function(input) {
        return {
            version: input.version,
            id: input.id
        };
    },
    getTemplateData: function(state) {
        return {
            version: state.version,
            id: state.id
        };
    },
    init: function() {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder = window.rerenderInitOrder || [];
        window.rerenderInitOrder.push(this.state.id);
    },
    onUpdate: function() {
        // console.log(module.id, 'init()', this.state);
        window.rerenderInitOrder.push(this.state.id);
    }
});
