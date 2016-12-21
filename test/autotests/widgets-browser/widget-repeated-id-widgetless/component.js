var widgetlessComponent = require('./components/app-widgetless');
var simpleComponent = require('./components/app-simple');

module.exports = {
	getTemplateData: function(state, input) {
		return {
			components: [
                widgetlessComponent,
                widgetlessComponent,
                simpleComponent
            ]
		};
	}
};