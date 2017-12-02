$_mod.def("/marko-test$1.0.0/components-pages/fixtures/async-boundaries/components/app-hello-async/renderer", function(require, exports, module, __filename, __dirname) { var AppHello = require('/marko-test$1.0.0/components-pages/fixtures/async-boundaries/components/app-hello/index.marko'/*'../app-hello'*/);

module.exports = function(input, out) {
    var asyncOut = out.beginAsync();
    setTimeout(function() {
        AppHello.render({
            name: input.name
        }, asyncOut);
        asyncOut.end();
    }, 10);
};

});