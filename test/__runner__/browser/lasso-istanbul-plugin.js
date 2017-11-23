var istanbul = require('istanbul-lib-instrument');
var resolve = require('lasso-resolve-from');

module.exports = function (lasso, pluginConfig) {
    var instrumenter = istanbul.createInstrumenter();

    lasso.addTransform({
        stream: false,
        contentType: 'js',
        transform: function (code, context) {
            var file = context.dependency.file;

            if (!file || file.includes('node_modules/') || file.includes('test/') || file.includes('coverage/') || file.includes('benchmark/')) return code;

            var unwrappedCode;

            if (context.dependency.type === 'commonjs-def') {
                unwrappedCode = code.replace(/^\$\_mod[^\n]+?\{ /, '').replace(/\n\}\);$/, '');
            }

            var actualFile = resolve(__dirname, file).path;
            var instrumentedCode = instrumenter.instrumentSync(unwrappedCode || code, actualFile);

            return unwrappedCode ? code.replace(unwrappedCode, instrumentedCode) : instrumentedCode;
        }
    });
};