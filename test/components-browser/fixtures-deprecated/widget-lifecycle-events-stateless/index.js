module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function (state, input) {
		return {
			name: input.name,
			messageCount: input.messageCount
		};
	},

	init: function () {
		this.lifecycleEvents = [];

		this.recordWidgetLifecycleEvent('init');
	},

	onRender: function (eventArg) {
		this.recordWidgetLifecycleEvent(eventArg.firstRender ? 'onRender:firstRender' : 'onRender');
	},

	onBeforeDestroy: function () {
		this.recordWidgetLifecycleEvent('onBeforeDestroy');
	},

	onDestroy: function () {
		this.recordWidgetLifecycleEvent('onDestroy');
	},

	onBeforeUpdate: function () {
		this.recordWidgetLifecycleEvent('onBeforeUpdate');
	},

	onUpdate: function () {
		this.recordWidgetLifecycleEvent('onUpdate');
	},

	recordWidgetLifecycleEvent: function (name) {
		this.lifecycleEvents.push(name);
	}
});