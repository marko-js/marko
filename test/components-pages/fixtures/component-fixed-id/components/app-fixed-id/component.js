var expect = require("chai").expect;

module.exports = {
    onInput: function(input) {
        this.label = input.label || "app-fixed-id";
    },

    onMount: function() {
        this.name = "app-fixed-id";
        window.appFixedId = this;
    },
    testGetComponent: function() {
        var helloComponent = this.getComponent("hello");
        expect(helloComponent != null).to.equal(true);
    },
    testGetEl: function() {
        var wrapperEl = this.getEl("wrapper");
        expect(wrapperEl != null).to.equal(true);
    }
};
