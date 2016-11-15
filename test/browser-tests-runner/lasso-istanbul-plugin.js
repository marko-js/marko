var istanbul = require('istanbul-lib-instrument');

module.exports = function(lasso, pluginConfig) {
    var instrumenter = istanbul.createInstrumenter();

    lasso.addTransform({
        stream: false,
        contentType: 'js',
        transform: function(code, context) {
            var file = context.dependency.file

            if(!file || file.includes('node_modules/')
                     || file.includes('test/')
                     || file.includes('coverage/')
                     || file.includes('benchmark/')
            ) return code;

            return instrumenter.instrumentSync(code, context.dependency.file);
        }
    });
}