module.exports = require('marko-widgets').defineComponent({
	template: require('./template.marko'),

	getTemplateData: function(state, input) {
        var widgetLessRenderer = require('../app-widgetless/renderer');
        var simpleRenderer = require('../app-simple').renderer;

		return {
			renderers: [
                widgetLessRenderer,
                widgetLessRenderer,
                simpleRenderer
            ]
		};
	}
});