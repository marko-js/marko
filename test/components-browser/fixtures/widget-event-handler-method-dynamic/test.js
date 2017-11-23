var expect = require('chai').expect;

module.exports = function (helpers) {
				var component = helpers.mount(require('./index'), {});
				expect(component.fooClicked).to.equal(false);
				expect(component.barClicked).to.equal(false);

				helpers.triggerClick(component.getEl('foo'));
				expect(component.fooClicked).to.equal(true);
				expect(component.barClicked).to.equal(false);

				helpers.triggerClick(component.getEl('bar'));
				expect(component.fooClicked).to.equal(true);
				expect(component.barClicked).to.equal(true);
};