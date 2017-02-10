var expect = require('chai').expect;

module.exports = {
    onCreate: function(input, out) {
        if (typeof window !== 'undefined') {
            throw new Error('onCreate should not be called in the browser');
        }
        if (this.state !== undefined) {
            throw new Error('this.state should be undefined');
        }
        this.state = {
            events: ['onCreate']
        };

        this.onCreateInputName = input.name;
        this.onCreateOutName = out.global.name;
    },

    onRender: function(out) {
        if (typeof window !== 'undefined') {
            throw new Error('onRender should not be called in the browser');
        }

        this.state.events.push('onRender');

        if (!out || !out.write) {
            throw new Error('"out" argument expected');
        }
    },

    onInput: function(input) {
        if (typeof window !== 'undefined') {
            throw new Error('onInput should not be called in the browser');
        }

        this.state.events.push('onInput[' + input.name + ']');
    },

    onMount: function() {
        var widgetsLookup = window.widgets || (window.widgets = {});
        widgetsLookup['lifecycle-events-component-object'] = this;
    },

    test: function() {
        expect(this.state.events).to.deep.equal(['onCreate', 'onInput[Frank]', 'onRender']);
        expect(this.onCreateInputName).to.equal('Frank');
        expect(this.onCreateOutName).to.equal('FrankGlobal');
    }
};