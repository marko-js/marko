var expect = require('chai').expect;

module.exports = function(helpers, done) {
    require('marko/jquery').patchComponent(window.$);

    try {
        var component = helpers.mount(require('./index'), {});

        expect(component.$().attr('id')).to.equal(component.id);
        expect(component.$().attr('class')).to.equal('app-jquery-proxy');
        expect(component.$('#foo').html()).to.equal('foo');
        expect(component.$('#fooText').html()).to.equal('fooText');
        expect(component.$('#foo-text').html()).to.equal('foo-text');
        expect(component.$('#ul li').length).to.equal(3);
        expect(component.$('button').html()).to.equal('Test Button');
        expect(component.$('li', 'ul').length).to.equal(3);

        var count = 0;
        component.$(function() {
            count++;
            done();
        });

    } finally {
        delete require('marko/components/Component').prototype.$;
    }
};