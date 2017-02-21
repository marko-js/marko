module.exports = require('marko/components/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	handleColorClick: function(event, el) {
		this.color = el.getAttribute('data-color');
	}
});