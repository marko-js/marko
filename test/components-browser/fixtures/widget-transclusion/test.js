var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var el = component.el;
    var originalH1Html = el.querySelector('h1').innerHTML;

    expect(el.innerHTML).to.contain('alert alert-success');

    // The inner HTML for the H1 should not change since only the body content changed
    component.setAlertMessage('Hello Universe');
    component.update();

    expect(el.querySelector('h1').innerHTML).to.equal(originalH1Html);
    expect(el.querySelector('h1').innerHTML).to.contain('success');
    expect(el.querySelector('.alert').className).to.contain('alert alert-success');

    // The inner HTML for the H1 should change since the state of the alert component changed
    component.setAlertType('failure');
    component.update();

    expect(el.querySelector('h1').innerHTML).to.not.equal(originalH1Html);
    expect(el.querySelector('h1').innerHTML).to.contain('failure');
    expect(el.querySelector('.alert').className).to.contain('alert alert-failure');
};