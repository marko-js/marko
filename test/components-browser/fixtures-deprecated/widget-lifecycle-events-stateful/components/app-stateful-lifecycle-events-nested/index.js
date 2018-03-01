var lifecycle = require('../../lifecycle-recorder');

module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getInitialState: function (input) {
		return {
			messageCount: input.messageCount,
			name: input.name
		};
	},

	getTemplateData: function (state, input) {
		return {
			messageCount: state.messageCount
		};
	},

	init: function () {
		if (this.INIT_CALLED) {
			throw new Error('Doublie init()');
		}
		this.INIT_CALLED = true;
		lifecycle.record(this.state.name || this.id, 'init');
	},

	setMessageCount: function (messageCount) {
		this.setState('messageCount', messageCount);
	},

	onRender: function (eventArg) {
		lifecycle.record(this.state.name || this.id, eventArg.firstRender ? 'onRender:firstRender' : 'onRender');
	},

	onBeforeDestroy: function () {
		lifecycle.record(this.state.name || this.id, 'onBeforeDestroy');
	},

	onDestroy: function () {
		lifecycle.record(this.state.name || this.id, 'onDestroy');
	},

	onBeforeUpdate: function () {
		lifecycle.record(this.state.name || this.id, 'onBeforeUpdate');
	},

	onUpdate: function () {
		lifecycle.record(this.state.name || this.id, 'onUpdate');
	}
});