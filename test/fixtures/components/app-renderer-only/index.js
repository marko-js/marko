module.exports = require('marko-widgets').defineComponent({
    renderer: function(input, out) {
        out.write('Hello ' + input.name + '!');
    }
});