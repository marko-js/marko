var path = require('path');
var expect = require('chai').expect;
var markoComponents = require('marko/components');

describe(path.basename(__dirname), function() {
    it('should initialize components after ready', function(done) {

        expect(window.beforeInitComponentsFooComponent).to.equal(undefined);
        expect(window.afterInitComponentsBarComponent).to.equal(undefined);

        expect(window.fooComponent != null).to.equal(true);
        expect(window.barComponent != null).to.equal(true);

        expect(window.fooComponent.id).to.be.a('string');
        expect(window.barComponent.id).to.be.a('string');
        expect(window.fooComponent.id).to.not.equal(window.barComponent.id);
        done();
    });

    it('should assign unique IDs to each component', function(done) {
        expect(window.fooComponent.id).to.be.a('string');
        expect(window.barComponent.id).to.be.a('string');
        expect(window.bazComponent.id).to.be.a('string');
        expect(window.fooComponent.id).to.not.equal(window.barComponent.id);
        expect(window.fooComponent.id).to.not.equal(window.bazComponent.id);
        expect(window.bazComponent.id).to.contain(window.fooComponent.id);
        done();
    });

    it('should assign a unique ID to a nested component based on the parent ID', function(done) {
        expect(window.bazComponent.id).to.contain(window.fooComponent.id + '-');
        done();
    });
});