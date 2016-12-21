var barComponent = require('./components/app-bar');

module.exports = {
    getTemplateData: function() {
        return {
            barComponent: barComponent
        };
    }
};