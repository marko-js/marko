module.exports = require('marko-widgets').defineWidget({
    renderer: function(input, out) {
        out.write('Hello ' + input.name + '!');
    }
});