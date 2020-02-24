module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),
    handleTransitive: function() {
        window.transitiveHandled = true;
    }
});
