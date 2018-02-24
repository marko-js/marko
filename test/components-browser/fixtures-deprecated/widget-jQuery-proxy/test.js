var expect = require('chai').expect;

module.exports = function (helpers, done) {
    var widget = helpers.mountLegacy({ component:require.resolve('./index') }, {});

    expect(widget.$().attr('class')).to.equal('app-jquery-proxy');
    expect(widget.$('#foo').html()).to.equal('foo');
    expect(widget.$('#fooText').html()).to.equal('fooText');
    expect(widget.$('#foo-text').html()).to.equal('foo-text');
    expect(widget.$('#ul li').length).to.equal(3);
    expect(widget.$('button').html()).to.equal('Test Button');
    expect(widget.$('li', 'ul').length).to.equal(3);

    var count = 0;
    widget.$(function () {
        count++;
        done();
    });
};