var expect = require('chai').expect;

module.exports = function(helpers) {
    var widget = helpers.mount(require('./index'), {
        name: 'Frank',
        index: 0
    });

    var fooWidget = widget.getWidget('foo');

    expect(fooWidget.el.querySelector('.body').innerHTML).to.equal('Current index: 0');
    expect(fooWidget.el.querySelector('span').innerHTML).to.equal('Hello Frank!');

    fooWidget.state.name = 'Jane';

    fooWidget.update();

    expect(fooWidget.el.querySelector('.body').innerHTML).to.equal('Current index: 0');
    expect(fooWidget.el.querySelector('span').innerHTML).to.equal('Hello Jane!');
};