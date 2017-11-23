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

    expect(Object.keys(lookup.componentsById).length).to.equal(3);

    expect(lookup.componentsById[0].id).to.not.equal(lookup.componentsById[1].id);

    lookup.componentsById[0].emitPurchase();
    expect(component.purchaseEvents).to.deep.equal([{
        id: 0,
        title: 'Item 1'
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