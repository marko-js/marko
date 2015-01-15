require('marko-widgets');
var chai = require('chai');
var expect = chai.expect;

describe('init' , function() {
    it('should correctly initialize widgets rendered on the server', function() {

        var pageOutput = require('./generated/page-server-init.json');
        var html = pageOutput.html;
        var js = pageOutput.js;

        var el = document.createElement('tests');
        el.innerHTML = html;
        document.body.appendChild(el);

        eval(js);

        expect(window.appFoo).to.be.a('object');
        expect(window.appFoo.config).to.be.a('object');
        expect(window.appFoo.config).to.deep.equal({
            string: 'world',
            number: 12,
            boolean: true,
            complex: {
                a: '<\"hello">',
                b: 'test'
            }
        });
    });
});