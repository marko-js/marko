var path = require('path');
var expect = require('chai').expect;

describe(path.basename(__dirname), function() {
    it('should allow return', function() {
        var widget = window.widgets['onInput-return'];

        expect(widget.input.name).to.equal('FRANK');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('FRANK');

        widget.input = {
            name: 'John'
        };

        widget.update();

        expect(widget.input.name).to.equal('JOHN');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('JOHN');
    });

    it('should allow input to be assigned to null', function() {
        var widget = window.widgets['onInput-assign-null'];

        expect(widget.input).to.equal(null);
        expect(widget.el.querySelector('.name').innerHTML).to.equal('John');

        widget.input = {
            name: 'Jane'
        };

        widget.update();

        expect(widget.input).to.equal(null);
        expect(widget.el.querySelector('.name').innerHTML).to.equal('Jane');

        widget.input = {
            name: 'Henry'
        };

        widget.update();

        expect(widget.input).to.equal(null);
        expect(widget.el.querySelector('.name').innerHTML).to.equal('Henry');
    });

    it('should allow input to be assigned to null with return', function() {
        var widget = window.widgets['onInput-assign-null-and-return'];

        expect(widget.input).to.equal(null);
        expect(widget.el.querySelector('.name').innerHTML).to.equal('JANE');

        widget.input = {
            name: 'Frank'
        };

        widget.update();

        expect(widget.input).to.equal(null);
        expect(widget.el.querySelector('.name').innerHTML).to.equal('FRANK');

        widget.input = {
            name: 'Henry'
        };

        widget.update();

        expect(widget.input).to.equal(null);
        expect(widget.el.querySelector('.name').innerHTML).to.equal('HENRY');
    });

    it('should allow input to be assigned to a new object', function() {
        var widget = window.widgets['onInput-assign-object'];

        expect(widget.input.name).to.equal('FRANK');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('Frank');

        widget.input = {
            name: 'Jane'
        };

        widget.update();

        expect(widget.input.name).to.equal('JANE');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('Jane');

        widget.input = {
            name: 'Henry'
        };

        widget.update();

        expect(widget.input.name).to.equal('HENRY');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('Henry');
    });

    it('should allow input to be assigned to a new object with return', function() {
        var widget = window.widgets['onInput-assign-object-and-return'];

        expect(widget.input.name).to.equal('HEATHER');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('heather');

        widget.input = {
            name: 'Jane'
        };

        widget.update();

        expect(widget.input.name).to.equal('JANE');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('jane');

        widget.input = {
            name: 'Henry'
        };

        widget.update();

        expect(widget.input.name).to.equal('HENRY');
        expect(widget.el.querySelector('.name').innerHTML).to.equal('henry');
    });
});