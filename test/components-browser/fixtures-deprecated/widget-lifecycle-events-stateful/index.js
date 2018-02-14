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
		window.recordWidgetLifecycleEvent(this.id, 'init');
	},

	onRender: function (eventArg) {
		window.recordWidgetLifecycleEvent(this.id, eventArg.firstRender ? 'onRender:firstRender' : 'onRender');
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
		window.recordWidgetLifecycleEvent(this.id, 'onBeforeDestroy');
	},

	onDestroy: function () {
		window.recordWidgetLifecycleEvent(this.id, 'onDestroy');
	},

	onBeforeUpdate: function () {
		window.recordWidgetLifecycleEvent(this.id, 'onBeforeUpdate');
	},

	onUpdate: function () {
		window.recordWidgetLifecycleEvent(this.id, 'onUpdate');
	}
});