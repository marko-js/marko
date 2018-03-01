var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require.resolve('./index'), { swapped: false });

    var els = helpers.targetEl.querySelectorAll('div');
    expect(els[0].className).to.equal('a');
    expect(els[1].className).to.equal('b');

    component.input = { swapped: true };
    component.update();

    var elsAfter = helpers.targetEl.querySelectorAll('div');
    expect(elsAfter[0].className).to.equal('b');
    expect(elsAfter[1].className).to.equal('a');

    // Make sure the same element was swapped
    expect(els[0]).to.equal(elsAfter[1]);
    expect(els[1]).to.equal(elsAfter[0]);
};

module.exports.skipHydrate = true;