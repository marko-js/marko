var barRenderer = require('./components/app-bar/renderer').render;

module.exports = require('marko/widgets/legacy').defineComponent({
    template: require('./template.marko'),
    getTemplateData: function(input, out) {
        return {
            barRenderer: barRenderer
        };
    }
});