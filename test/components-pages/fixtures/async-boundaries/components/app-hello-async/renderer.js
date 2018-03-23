var AppHello = require("../app-hello");

module.exports = function(input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(function() {
        AppHello.render(
            {
                name: input.name
            },
            asyncOut
        );
        asyncOut.end();
    }, 10);
};
