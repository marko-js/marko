module.exports = require('marko/widgets').defineComponent({
	template: require.resolve('./template.marko'),

	handleColorClick: function(event, el) {
		this.color = el.getAttribute('data-color');
	}
});