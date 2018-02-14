require('marko/runtime/vdom');

module.exports = require('marko/legacy-components').defineComponent({
    renderer: function (input, out) {
        out.text('Hello ' + input.name + '!');
    }
});