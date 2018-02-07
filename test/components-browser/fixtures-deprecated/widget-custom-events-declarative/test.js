var expect = require('chai').expect;
var pubsub = require('../../../__util__/pubsub');

module.exports = function (helpers) {
    var widget = helpers.mount(require('./index'), {});

    var received1 = [];
    var received2 = [];

    widget.handleTestEvent1 = function () {
        received1.push({
            args: arguments,
            widget: arguments[arguments.length - 1]
        });
    };

    widget.handleTestEvent2 = function () {
        received2.push({
            args: arguments,
            widget: arguments[arguments.length - 1]
        });
    };

    widget.getWidget('customEvents').emitTestEvent1();
    expect(received1.length).to.equal(1);
    expect(received1[0].args.length).to.equal(3); // ['a', 'b', sourceWidget]
    expect(received1[0].widget).to.equal(widget.getWidget('customEvents'));

    pubsub.channel('customEvents-' + widget.id).emit('emitTestEvent2');

    expect(received1.length).to.equal(1);
    expect(received2.length).to.equal(1);

    expect(received2[0].args.length).to.equal(1); // [sourceWidget]
    expect(received2[0].widget).to.be.an('object');
};
