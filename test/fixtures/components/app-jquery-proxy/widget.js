var expect = require('chai').expect;

function Widget(config) {

}

Widget.prototype = {
    test: function() {
        expect(this.$().attr('id')).to.equal(this.id);
        expect(this.$().attr('class')).to.equal('app-jquery-proxy');
        expect(this.$('#foo').html()).to.equal('foo');
        expect(this.$('#ul li').length).to.equal(3);
        expect(this.$('button').html()).to.equal('Test Button');
        var isReady = false;
        this.$(function() {
            isReady = true;
        });

        expect(isReady).to.equal(true);

        expect(this.$('li', 'ul').length).to.equal(3);
    }
};

exports.Widget = Widget;