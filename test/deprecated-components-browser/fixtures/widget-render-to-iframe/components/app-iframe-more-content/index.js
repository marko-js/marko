module.exports = require('marko/legacy-components').defineComponent({
	template: require.resolve('./template.marko'),

	getValue: function () {
		return this.getEl('input').value;
	}
});