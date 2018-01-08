var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});
    var rootEl = component.el;

    var nestedDivs = rootEl.querySelectorAll('div');
    expect(nestedDivs[0].className).to.equal('hello');
    expect(nestedDivs[1].className).to.equal('world');
    expect(nestedDivs[0].innerHTML).to.equal('0');
    expect(nestedDivs[1].innerHTML).to.equal('0');

    component.state.swapped = true;
    component.state.count = 1;
    component.update();

    var nestedDivsAfter = rootEl.querySelectorAll('div');
    expect(nestedDivsAfter[0].className).to.equal('world');
    expect(nestedDivsAfter[1].className).to.equal('hello');
    expect(nestedDivsAfter[0].innerHTML).to.equal('1');
    expect(nestedDivsAfter[1].innerHTML).to.equal('1');
    expect(nestedDivsAfter[0]).to.not.equal(nestedDivs[1]);
    expect(nestedDivsAfter[1]).to.not.equal(nestedDivs[0]);
};