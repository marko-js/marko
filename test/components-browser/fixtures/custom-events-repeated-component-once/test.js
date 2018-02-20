var expect = require('chai').expect;
var lookup = require('./lookup');

var items = [{
    id: 0,
    title: 'Item 1'
}, {
    id: 1,
    title: 'Item 2'
}, {
    id: 2,
    title: 'Item 3'
}];

module.exports = function (helpers) {
    var component = helpers.mount(require('./index'), {
        items: items
    });

    // Test first one twice, should be the same
    lookup.componentsById[0].emitPurchase();
    expect(component.purchaseEvents).to.deep.equal([{
        id: 0,
        title: 'Item 1'
    }]);

    lookup.componentsById[0].emitPurchase();
    expect(component.purchaseEvents).to.deep.equal([{
        id: 0,
        title: 'Item 1'
    }]);

    // Test second one twice, should be the same
    lookup.componentsById[1].emitPurchase();
    expect(component.purchaseEvents).to.deep.equal([{
        id: 0,
        title: 'Item 1'
    }, {
        id: 1,
        title: 'Item 2'
    }]);

    lookup.componentsById[1].emitPurchase();
    expect(component.purchaseEvents).to.deep.equal([{
        id: 0,
        title: 'Item 1'
    }, {
        id: 1,
        title: 'Item 2'
    }]);
};
