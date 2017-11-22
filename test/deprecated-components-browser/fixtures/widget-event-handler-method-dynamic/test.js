var expect = require('chai').expect;

module.exports = function (helpers) {
				var widget = helpers.mount(require('./index'), {});
				expect(widget.fooClicked).to.equal(false);
				expect(widget.barClicked).to.equal(false);

				helpers.triggerClick(widget.getEl('foo'));
				expect(widget.fooClicked).to.equal(true);
				expect(widget.barClicked).to.equal(false);

				helpers.triggerClick(widget.getEl('bar'));
				expect(widget.fooClicked).to.equal(true);
				expect(widget.barClicked).to.equal(true);
};