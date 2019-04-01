module.exports = require("marko-widgets").defineComponent({
    template: require("./template.marko"),

    getInitialState: function(input) {
        return {
            data: input.data
        };
    },

    init: function() {
        window.fooWidgets = window.fooWidgets || [];
        window.fooWidgets.push(this);
    }
});
