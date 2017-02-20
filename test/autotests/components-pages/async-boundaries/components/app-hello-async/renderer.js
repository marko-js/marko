var template = require('./template.marko');

module.exports = function(input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(function() {
        template.render({
            name: input.name
        }, asyncOut);
        asyncOut.end();
    }, 10);
};