var expect = require('chai').expect;

module.exports = function (helpers) {

    var component = helpers.mount(require('./index'), { name: 'Frank', age: 30 });

    var nameEl = component.getEl('name');
    var ageEl = component.getEl('age');
    var linkEl = component.els[2];

    expect(nameEl.parentNode != null).to.equal(true);
    expect(ageEl.parentNode != null).to.equal(true);
    expect(linkEl.parentNode != null).to.equal(true);

    component.destroy();

    expect(nameEl.parentNode == null).to.equal(true);
    expect(ageEl.parentNode == null).to.equal(true);
    expect(linkEl.parentNode == null).to.equal(true);
};