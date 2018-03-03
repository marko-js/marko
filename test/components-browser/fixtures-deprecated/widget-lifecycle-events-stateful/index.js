var lifecycle = require('./lifecycle-recorder');

module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getInitialState: function (input) {
		return {
			name: input.name,
			messageCount: input.messageCount
		};
	},

	getTemplateData: function (state, input) {
		return {
			name: state.name,
			messageCount: state.messageCount
		};
	},

	init: function () {
		this.lifecycleEvents = [];
		lifecycle.record(this.id, 'init');
	},

	onRender: function (eventArg) {
		lifecycle.record(this.id, eventArg.firstRender ? 'onRender:firstRender' : 'onRender');
	},

	update_messageCount: function (newMessageCount) {
		this.getWidget('nestedStateful').setMessageCount(newMessageCount);
		this.getWidget('nestedStateful').update();
	},

	setName: function (newName) {
		this.setState('name', newName);
	},

	setMessageCount: function (newMessageCount) {
		this.setState('messageCount', newMessageCount);
	},

	onBeforeDestroy: function () {
		lifecycle.record(this.id, 'onBeforeDestroy');
	},

	onDestroy: function () {
		lifecycle.record(this.id, 'onDestroy');
	},

	onBeforeUpdate: function () {
		lifecycle.record(this.id, 'onBeforeUpdate');
	},

	onUpdate: function () {
		lifecycle.record(this.id, 'onUpdate');
	}
});