var barComponent = require('./components/app-bar');

module.exports = {
    getTemplateData: function(input, out) {
        return {
            barComponent: barComponent,
            barWidgetRef: 'myBar'
        };
    }
};