var istanbul = require('istanbul-lib-instrument');
var resolve = require('lasso-resolve-from');
var instrumenter = istanbul.createInstrumenter();
var instrumentCache = {};

module.exports = function (lasso, pluginConfig) {
    lasso.addTransform({
        stream: false,
        contentType: 'js',
        transform: function (code, context) {
            var dep = context.dependency;
            var file = dep.file;
            var type = dep.type;
            var key = file + '|' + type;

            if (!file || file.includes('node_modules/') || file.includes('test/') || file.includes('coverage/') || file.includes('benchmark/')) return code;

            if (!instrumentCache[key]) {
                var unwrappedCode;
                var actualFile = resolve(__dirname, file).path;

                if (context.dependency.type === 'commonjs-def') {
                    unwrappedCode = code.replace(/^\$\_mod[^\n]+?\{ /, '').replace(/\n\}\);$/, '');
                }
    
                var instrumentedCode = instrumenter.instrumentSync(unwrappedCode || code, actualFile);
                instrumentCache[key] = unwrappedCode ? code.replace(unwrappedCode, instrumentedCode) : instrumentedCode;
            }

            return instrumentCache[key];
        }
    });
};
