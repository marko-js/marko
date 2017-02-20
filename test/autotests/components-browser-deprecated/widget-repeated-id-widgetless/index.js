var widgetLessRenderer = require('./components/app-widgetless/renderer');
var simpleRenderer = require('./components/app-simple').renderer;

module.exports = require('marko/widgets/legacy').defineComponent({
	template: require('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			renderers: [
                widgetLessRenderer,
                widgetLessRenderer,
                simpleRenderer
            ]
		};
	}
});