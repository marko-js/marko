module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getInitialState: function(input) {
        return { interactive: input.interactive };
    },

    getTemplateData: function(state) {
        return {
            interactive: state.interactive
        };
    }
});
