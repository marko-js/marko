module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialState: function() {
        return { mounted: false };
    },
    init: function() {
        this.setState("mounted", true);
    }
});
