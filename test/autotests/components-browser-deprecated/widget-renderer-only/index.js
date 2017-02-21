require('marko/runtime/vdom');

module.exports = require('marko/components/legacy').defineComponent({
    renderer: function(input, out) {
        out.text('Hello ' + input.name + '!');
    }
});