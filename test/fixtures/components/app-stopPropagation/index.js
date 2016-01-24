var expect = require('chai').expect;

function triggerMouseEvent(el, type) {
	var ev = document.createEvent("MouseEvent");
	ev.initMouseEvent(
		type,
		true /* bubble */, true /* cancelable */,
		window, null,
		0, 0, 0, 0, /* coordinates */
		false, false, false, false, /* modifier keys */
		0 /*left*/, null
	);
	el.dispatchEvent(ev);
}


module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name,
            messageCount: input.messageCount
		};
	},

	init: function() {
		this.divClicked = false;
		this.buttonClicked = false;
	},

	handleDivClick: function(event) {
		this.divClicked = true;
	},

	handleButtonClick: function(event) {
		this.buttonClicked = true;
		event.stopPropagation();
	},

	testStopPropagation: function() {
		triggerMouseEvent(this.getEl('button'), 'click');
		expect(this.divClicked).to.equal(false);
		expect(this.buttonClicked).to.equal(true);
	}
});