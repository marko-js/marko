module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getInitialState: function(input) {
		return {
			messageCount: input.messageCount,
			name: input.name
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
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'init');
	},

	setMessageCount: function(messageCount) {
		this.setState('messageCount', messageCount);
	},

	onBeforeDestroy: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onBeforeDestroy');
	},

	onDestroy: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onDestroy');
	},

	onBeforeUpdate: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onBeforeUpdate');
	},

	onUpdate: function() {
		window.recordWidgetLifecycleEvent(this.state.name || this.id, 'onUpdate');
	}
});