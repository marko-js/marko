module.exports = require('marko/widgets').defineComponent({
    createOut: require('marko/html').createOut,
    
    renderer: function(input, out) {
        out.write('Hello ' + input.name + '!');
    }
});