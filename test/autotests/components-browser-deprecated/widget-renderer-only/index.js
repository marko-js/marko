module.exports = require('marko/widgets/legacy').defineComponent({
    renderer: function(input, out) {
        out.text('Hello ' + input.name + '!');
    }
});