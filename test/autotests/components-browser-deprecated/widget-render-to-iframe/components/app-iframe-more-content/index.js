module.exports = require('marko/components/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getValue: function() {
		return this.getEl('input').value;
	}
});