var expect = require('chai').expect;

module.exports = function(helpers) {
    expect(function() {
        var markoWidgetsRegistry = require('marko-widgets/lib/registry');
        var widgetWithRender = require('./widget');
        var typePath = 'widgetWithRender';
        markoWidgetsRegistry.register(typePath, widgetWithRender);
        markoWidgetsRegistry.createWidget(typePath, 'w0');
    }).to.throw(/is no longer supported/);
};