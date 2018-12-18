module.exports = require("marko-widgets").defineComponent({
    template: require("./template"),
    getTemplateData(state, input) {
        return {
            x: input.x,
            y: state.y
        };
    }
});
