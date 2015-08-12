var barRenderer = require('../app-bar/renderer').render;

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getTemplateData: function(input, out) {
        return {
            barRenderer: barRenderer,
            barWidgetId: 'myBar'
        };
    }
});