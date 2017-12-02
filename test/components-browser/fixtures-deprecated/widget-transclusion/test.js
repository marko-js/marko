var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var el = widget.el;
    var originalH1Html = el.querySelector('h1').innerHTML;

    expect(el.innerHTML).to.contain('alert alert-success');

    // The inner HTML for the H1 should not change since only the body content changed
    widget.setAlertMessage('Hello Universe');
    widget.update();

    expect(el.querySelector('h1').innerHTML).to.equal(originalH1Html);
    expect(el.querySelector('h1').innerHTML).to.contain('success');
    expect(el.querySelector('.alert').className).to.contain('alert alert-success');

    // The inner HTML for the H1 should change since the state of the alert widget changed
    widget.setAlertType('failure');
    widget.update();

    expect(el.querySelector('h1').innerHTML).to.not.equal(originalH1Html);
    expect(el.querySelector('h1').innerHTML).to.contain('failure');
    expect(el.querySelector('.alert').className).to.contain('alert alert-failure');
};