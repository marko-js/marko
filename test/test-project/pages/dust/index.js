var dust = require('dustjs-linkedin');
var templatePath = require.resolve('./template.dust');
var widgetPath = require.resolve('./widget');

exports.render = function(callback) {
    dust.render(templatePath, {
        widgetPath: widgetPath
    }, callback);
};