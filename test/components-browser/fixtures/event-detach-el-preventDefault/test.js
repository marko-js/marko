var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        colors: ['red', 'green', 'blue']
    });

    expect(component.events.length).to.equal(0);

    var finishDetach;

    component.handleDetach = function (color, event) {
        expect(color).to.equal('green');
        finishDetach = event.detach;
        event.preventDefault();
    };

    component.input = {
        colors: ['red', 'blue']
    };

    component.update();

    expect(component.el.querySelectorAll('li').length).to.equal(3);
    expect(component.el.querySelectorAll('li')[1].innerHTML).to.contain('green');

    finishDetach();

    expect(component.el.querySelectorAll('li').length).to.equal(2);
    expect(component.el.querySelectorAll('li')[1].innerHTML).to.contain('blue');
};