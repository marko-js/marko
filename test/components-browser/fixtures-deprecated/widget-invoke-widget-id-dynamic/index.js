var barRenderer = require('./components/app-bar/renderer').render;

module.exports = require('marko/legacy-components').defineComponent({
    template: require('./template.marko'),
    getTemplateData: function (input, out) {
        return {
            barRenderer: barRenderer,
            barWidgetId: 'myBar'
        };
    }
});