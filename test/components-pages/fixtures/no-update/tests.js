var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should allow attributes to not be updated', function() {
        var app = window.app;
        var noUpdateComponent = app.getComponent('no-update-attr');
        var foo = noUpdateComponent.el.getAttribute('data-foo');
        expect(foo).to.equal('server');

        noUpdateComponent.input = {
            name: 'browser'
        };

        noUpdateComponent.update();

        expect(foo).to.equal('server');
    });

    it('should allow a root element to not be updated', function() {
        var app = window.app;
        var noUpdateComponent = app.getComponent('no-update-el');

        expect(noUpdateComponent.getNoUpdateEl().getAttribute('data-foo')).to.equal('server');
        expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal('server');

        noUpdateComponent.input = {
            name: 'browser'
        };

        noUpdateComponent.update();

        expect(noUpdateComponent.getNoUpdateEl().getAttribute('data-foo')).to.equal('server');
        expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal('server');
    });

    it('should allow a nested element to not be updated', function() {
        var app = window.app;
        var noUpdateComponent = app.getComponent('no-update-el-nested');

        expect(noUpdateComponent.getNoUpdateEl().getAttribute('data-foo')).to.equal('server');
        expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal('server');

        noUpdateComponent.input = {
            name: 'browser'
        };

        noUpdateComponent.update();

        expect(noUpdateComponent.getNoUpdateEl().getAttribute('data-foo')).to.equal('server');
        expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal('server');
    });

    it('should allow a body element to not be updated', function() {
        var app = window.app;
        var noUpdateComponent = app.getComponent('no-update-body-el');

        expect(noUpdateComponent.getNoUpdateEl().getAttribute('data-foo')).to.equal('server');
        expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal('server');

        noUpdateComponent.input = {
            name: 'browser'
        };

        noUpdateComponent.update();

        expect(noUpdateComponent.getNoUpdateEl().getAttribute('data-foo')).to.equal('browser');
        expect(noUpdateComponent.getNoUpdateEl().innerHTML).to.equal('server');
    });
});
