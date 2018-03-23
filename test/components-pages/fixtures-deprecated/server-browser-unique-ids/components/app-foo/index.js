module.exports = require("marko-widgets").defineComponent({
    template: require("./template.marko"),

    init: function() {
        window.fooWidget = this;
    }
});
