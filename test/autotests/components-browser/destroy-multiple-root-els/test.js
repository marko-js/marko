var expect = require('chai').expect;

module.exports = function(helpers) {

    var widget = helpers.mount(require('./index'), { name: 'Frank', age: 30 });

    var nameEl = widget.getEl('name');
    var ageEl = widget.getEl('age');
    var linkEl = widget.els[2];


    expect(nameEl.parentNode != null).to.equal(true);
    expect(ageEl.parentNode != null).to.equal(true);
    expect(linkEl.parentNode != null).to.equal(true);

    widget.destroy();

    expect(nameEl.parentNode == null).to.equal(true);
    expect(ageEl.parentNode == null).to.equal(true);
    expect(linkEl.parentNode == null).to.equal(true);
};