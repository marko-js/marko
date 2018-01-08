module.exports = require('marko/legacy-components').defineComponent({
	template: require('./template.marko'),

	handleColorMouseOver: function (event, el) {
		this.color = el.getAttribute('data-color');
	}
});