var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(function() {
        template.render(
            {
                name: input.name,
                widgetConfig: {
                    name: input.name
                }
            },
            asyncOut);
        asyncOut.end();
    }, 10);

};