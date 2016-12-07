module.exports = require('marko/widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getInitialState: function(input) {
		return {
			messageCount: input.messageCount
		};
	},

	getTemplateData: function(state, input) {
		return {
			messageCount: state.messageCount
		};
	},

	init: function() {
		if (this.INIT_CALLED) {
			throw new Error('Doublie init()');
		}
		this.INIT_CALLED = true;
		window.recordWidgetLifecycleEvent(this.id, 'init');
	},

	setMessageCount: function(messageCount) {
		this.setState('messageCount', messageCount);
	},

	onRender: function(eventArg) {
		window.recordWidgetLifecycleEvent(this.id, eventArg.firstRender ? 'onRender:firstRender' : 'onRender');
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

	onUpdate: function() {
		window.recordWidgetLifecycleEvent(this.id, 'onUpdate');
	}
});