module.exports = require("marko/legacy-components").defineComponent({
    template: require("./template.marko"),

    init: function() {
        this.name = "app-foo";
    }
});
