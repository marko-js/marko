var expect = require('chai').expect;

module.exports = function(helpers, done) {
    var widget = helpers.mount(require('./index'), {});

    expect(widget.$().attr('id')).to.equal(widget.id);
    expect(widget.$().attr('class')).to.equal('app-jquery-proxy');
    expect(widget.$('#foo').html()).to.equal('foo');
    expect(widget.$('#ul li').length).to.equal(3);
    expect(widget.$('button').html()).to.equal('Test Button');
    expect(widget.$('li', 'ul').length).to.equal(3);

    var count = 0;
    widget.$(function() {
        count++;
        done();
    });
};