module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name,
            messageCount: input.messageCount
		};
	},

	init: function() {
		window.recordWidgetLifecycleEvent(this.id, 'init');
	},

	onBeforeDestroy: function() {
		window.recordWidgetLifecycleEvent(this.id, 'onBeforeDestroy');
	},

	onDestroy: function() {
		window.recordWidgetLifecycleEvent(this.id, 'onDestroy');
	},

	onBeforeUpdate: function() {
		window.recordWidgetLifecycleEvent(this.id, 'onBeforeUpdate');
	},

	onAfterUpdate: function() {
		window.recordWidgetLifecycleEvent(this.id, 'onAfterUpdate');
	}
});