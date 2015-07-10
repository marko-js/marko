var expect = require('chai').expect;

module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
		};
	},

	init: function() {
		this.triggerMouseEvent = function (el, type) {
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
	    };

		this.fooClicked = false;
		this.barClicked = false;
	},

	handleFooClick: function() {
		this.fooClicked = true;
	},

	handleBarClick: function() {
		this.barClicked = true;
	},

	test: function() {
		expect(this.fooClicked).to.equal(false);
		expect(this.barClicked).to.equal(false);

		this.triggerMouseEvent(this.getEl('foo'), 'click');
		expect(this.fooClicked).to.equal(true);
		expect(this.barClicked).to.equal(false);

		this.triggerMouseEvent(this.getEl('bar'), 'click');
		expect(this.fooClicked).to.equal(true);
		expect(this.barClicked).to.equal(true);
	}
});