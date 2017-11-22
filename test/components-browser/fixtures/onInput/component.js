var expect = require('chai').expect;

module.exports = {
    onInput: function (input) {
        expect(input.name).to.eql('Frank');
        this.state = { count: 0 };
        this.setUpTest();
    },

    onMount: function (config) {
        expect(this.state.count).to.eql(0);
        expect(this.foo).to.eql('bar');
        expect(this.array).to.eql([1, 2, 3]);
        this.onMountCalled = true;
    },

    setUpTest: function () {
        this.foo = 'bar';
        this.array = [1, 2, 3];
    }
};