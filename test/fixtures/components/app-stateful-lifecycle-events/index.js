module.exports = require('marko-widgets').defineWidget({
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
		if (!this.lifecycleEvents) {
			this.lifecycleEvents = [];
		}
	},

	update_messageCount: function(newMessageCount) {
		this.getEl('messageCount').innerHTML = '' + newMessageCount;
	},

	setName: function(newName) {
		this.setState('name', newName);
	},

	setMessageCount: function(newMessageCount) {
		this.setState('messageCount', newMessageCount);
	},

	onBeforeDestroy: function() {
		this.lifecycleEvents.push('onBeforeDestroy');
	},

	onDestroy: function() {
		this.lifecycleEvents.push('onDestroy');
	},

	onBeforeUpdate: function() {
		this.lifecycleEvents.push('onBeforeUpdate');
	},

	onAfterUpdate: function() {
		this.lifecycleEvents.push('onAfterUpdate');
	}
});