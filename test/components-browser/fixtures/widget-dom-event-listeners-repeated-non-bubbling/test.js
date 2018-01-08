var expect = require('chai').expect;

module.exports = function (helpers) {
				var component = helpers.mount(require('./index'), {
								name: 'Frank',
								count: 30
				});

				var li1 = component.getEl('foo-0');
				var li2 = component.getEl('foo-1');
				var li3 = component.getEl('foo-2');

				expect(li1.innerHTML).to.equal('red');
				expect(li2.innerHTML).to.equal('green');
				expect(li3.innerHTML).to.equal('blue');

				helpers.triggerMouseMove(li1);

				expect(li1.innerHTML).to.equal('0');
				expect(li2.innerHTML).to.equal('green');
				expect(li3.innerHTML).to.equal('blue');

				helpers.triggerMouseMove(li2);

				expect(li1.innerHTML).to.equal('0');
				expect(li2.innerHTML).to.equal('1');
				expect(li3.innerHTML).to.equal('blue');

				helpers.triggerMouseMove(li3);

				expect(li1.innerHTML).to.equal('0');
				expect(li2.innerHTML).to.equal('1');
};