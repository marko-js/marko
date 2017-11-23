var expect = require('chai').expect;

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        showSimple: true
    });

    var simple = component.getComponent('simple');
    var simpleDestroyed = false;

    simple.onDestroy = function () {
        simpleDestroyed = true;
    };

    expect(simple != null).to.equal(true);

    component.input = {
        showSimple: false
    };

    component.update();

    expect(simpleDestroyed).to.equal(true);
    expect(simple.isDestroyed()).to.equal(true);

    expect(component.getComponent('simple') == null).to.equal(true);
};