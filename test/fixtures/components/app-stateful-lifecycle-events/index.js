module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getInitialState: function(input) {
		return {
			name: input.name,
			messageCount: input.messageCount
		};
	},

	getTemplateData: function(state, input) {
		return {
			name: state.name,
            messageCount: state.messageCount
		};
	},

	init: function() {
		window.recordWidgetLifecycleEvent(this.id, 'init');
	},

	update_messageCount: function(newMessageCount) {
		this.getWidget('nestedStateful').setMessageCount(newMessageCount);
	},

	setName: function(newName) {
		this.setState('name', newName);
	},

	setMessageCount: function(newMessageCount) {
		this.setState('messageCount', newMessageCount);
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