module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name,
            messageCount: input.messageCount
		};
	},

	init: function() {
		if (!this.lifecycleEvents) {
			this.lifecycleEvents = [];
		}
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