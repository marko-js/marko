module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    getInitialProps(input) {
        input.calls = ["getInitialProps"];
        return input;
    },

    getInitialState(input) {
        input.calls.push("getInitialState");
        return input;
    },

    getTemplateData(input) {
        input.calls.push("getTemplateData");
        return input;
    },

    getWidgetConfig: function(input) {
        input.calls.push("getWidgetConfig");
        return input.calls;
    },

    init: function(config) {
        this.config = config;
    }
});
