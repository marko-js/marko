var expect = require('chai').expect;

module.exports = function(helpers) {
    expect(function() {
        var markoWidgetsRegistry = require('marko/widgets/registry');
        var widgetWithRender = function() { return require('./widget'); };
        var typeName = 'widgetWithRender';
        markoWidgetsRegistry.register(typeName, widgetWithRender);
        markoWidgetsRegistry.createWidget(typeName, 'w0');
    }).to.throw(/is no longer supported/);
};