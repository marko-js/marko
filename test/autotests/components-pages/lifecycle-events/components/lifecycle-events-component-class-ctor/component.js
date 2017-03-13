var expect = require('chai').expect;

function Component() {
    throw new Error('THIS SHOULD NOT BE CALLED');
}

Component.prototype = {

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
        var componentsLookup = window.components || (window.components = {});
        componentsLookup['lifecycle-events-component-class-ctor'] = this;
    },

    test: function() {
        expect(this.state.events).to.deep.equal(['onCreate', 'onInput[Frank]', 'onRender']);
        expect(this.onCreateInputName).to.equal('Frank');
        expect(this.onCreateOutName).to.equal('FrankGlobal');
    }
};

module.exports = Component;
