var expect = require('chai').expect;

module.exports = require('marko-widgets').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
        return {};
	},

	init: function() {
		this.counter = 0;
		window.testData.addWidget('app-repeated-el-dom-events', this);
	},

	handleMouseMove: function(event, el) {
        el.innerHTML = '' + this.counter++;
    },

	test: function() {
		function triggerMouseMove(el) {
	        var ev = document.createEvent("MouseEvent");
	        ev.initMouseEvent(
	            "mousemove",
	            true /* bubble */, true /* cancelable */,
	            window, null,
	            0, 0, 0, 0, /* coordinates */
	            false, false, false, false, /* modifier keys */
	            0 /*left*/, null
	        );
	        el.dispatchEvent(ev);
	    }

		var li1 = this.getEl('foo-0');
		var li2 = this.getEl('foo-1');
		var li3 = this.getEl('foo-2');

		expect(li1.innerHTML).to.equal('red');
		expect(li2.innerHTML).to.equal('green');
		expect(li3.innerHTML).to.equal('blue');

		triggerMouseMove(li1);

		expect(li1.innerHTML).to.equal('0');
		expect(li2.innerHTML).to.equal('green');
		expect(li3.innerHTML).to.equal('blue');

		triggerMouseMove(li2);

		expect(li1.innerHTML).to.equal('0');
		expect(li2.innerHTML).to.equal('1');
		expect(li3.innerHTML).to.equal('blue');

		triggerMouseMove(li3);

		expect(li1.innerHTML).to.equal('0');
		expect(li2.innerHTML).to.equal('1');
		expect(li3.innerHTML).to.equal('2');
	}
});