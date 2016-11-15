module.exports = require('marko/widgets').defineComponent({
    renderer: function(input, out) {
        out.text('Hello ' + input.name + '!');
    }
});