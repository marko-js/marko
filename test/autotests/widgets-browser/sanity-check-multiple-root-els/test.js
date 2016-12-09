var expect = require('chai').expect;

module.exports = function(helpers) {

    var widget = helpers.mount(require('./index'), { name: 'Frank', age: 30, url: 'http://ebay.com/' });

    expect(widget.getEl('name').innerHTML).to.equal('Frank');
    expect(widget.getEl('age').innerHTML).to.equal('30');
    expect(widget.els[2].href).to.equal('http://ebay.com/');

    widget.setName('Jane');
    widget.setAge(50);
    widget.setUrl('http://ebay.com/search/');

    widget.update();

    expect(widget.getEl('name').innerHTML).to.equal('Jane');
    expect(widget.getEl('age').innerHTML).to.equal('50');
    expect(widget.els[2].href).to.equal('http://ebay.com/search/');
};