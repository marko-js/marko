var expect = require("chai").expect;

module.exports = {
    onMount: function() {
        window.appInitAsync = this;

        var helloFrank = this.getComponent("helloFrank");
        var helloFrankAsync = this.getComponent("helloFrankAsync");
        var helloJohn = this.getComponent("helloJohn");
        var helloJohnAsync = this.getComponent("helloJohnAsync");
        var helloJane = this.getComponent("helloJane");

        this.test = function() {
            expect(helloFrank).to.be.an("object");
            expect(helloFrank.name).to.equal("Frank");

            expect(helloFrankAsync).to.be.an("object");
            expect(helloFrankAsync.name).to.equal("Frank Async");

            expect(helloJohn).to.be.an("object");
            expect(helloJohn.name).to.equal("John");

            expect(helloJohnAsync).to.be.an("object");
            expect(helloJohnAsync.name).to.equal("John Async");

            expect(helloJane).to.be.an("object");
            expect(helloJane.name).to.equal("Jane");
        };
    }
};
