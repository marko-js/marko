module.exports = require("marko-widgets").defineComponent({
    template: require.resolve("./template.marko"),

    getTemplateData: function(state, input) {
        return {
            label: input.label
        };
    },

    emitPressEvent: function() {
        this.emit("press", { widget: this });
    }
});
