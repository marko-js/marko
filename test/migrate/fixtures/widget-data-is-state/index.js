module.exports = require("marko-widgets").defineComponent({
    template: require("./template"),
    getInitialState(input) {
        return {
            x: input.x,
            y: input.y
        };
    }
});
