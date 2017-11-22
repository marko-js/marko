var expect = require('chai').expect;
var pubsub = require('~/__util__/pubsub');

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {});

    var received1 = [];
    var received2 = [];

    component.handleTestEvent1 = function () {
        received1.push({
            args: arguments,
            component: arguments[arguments.length - 1]
        });
    };

    component.handleTestEvent2 = function () {
        received2.push({
            args: arguments,
            component: arguments[arguments.length - 1]
        });
    };

    component.getComponent('customEvents').emitTestEvent1();
    expect(received1.length).to.equal(1);
    expect(received1[0].args.length).to.equal(3); // ['a', 'b', sourceComponent]
    expect(received1[0].component).to.equal(component.getComponent('customEvents'));

    pubsub.channel('customEvents-' + component.id).emit('emitTestEvent2');

    expect(received1.length).to.equal(1);
    expect(received2.length).to.equal(1);

    expect(received2[0].args.length).to.equal(1); // [sourceComponent]
    expect(received2[0].component).to.be.an('object');
};
