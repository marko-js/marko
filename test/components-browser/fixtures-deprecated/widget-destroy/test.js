var expect = require('chai').expect;

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {
        showSimple: true
    });

    var simple = widget.getWidget('simple');
    var simpleDestroyed = false;

    simple.onDestroy = function () {
        simpleDestroyed = true;
    };

    expect(simple != null).to.equal(true);

    widget.setProps({
        showSimple: false
    });
    widget.update();

    expect(simpleDestroyed).to.equal(true);
    expect(simple.isDestroyed()).to.equal(true);

    expect(widget.getWidget('simple') == null).to.equal(true);
};