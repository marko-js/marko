module.exports = require("marko/legacy-components").defineComponent({
    template: require.resolve("./template.marko"),
    getInitialProps: function(input) {
        var name = input.name;
        return {
            name: name.toUpperCase()
        };
    }
});
