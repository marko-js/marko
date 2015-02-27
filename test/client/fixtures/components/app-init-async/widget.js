var expect = require('chai').expect;

function Widget() {
    window.testData.addWidget('app-init-async', this);

    var helloFrank = this.getWidget('helloFrank');
    var async1 = this.getWidget('async1');
    var helloJohn = this.getWidget('helloJohn');
    var async2 = this.getWidget('async2');
    var helloJane = this.getWidget('helloJane');

    this.testWidgetCollection = function() {
        expect(helloFrank).to.be.an('object');
        expect(helloFrank.name).to.equal('Frank');

        expect(async1).to.be.an('object');
        expect(async1.name).to.equal('async1');

        expect(helloJohn).to.be.an('object');
        expect(helloJohn.name).to.equal('John');

        expect(async2).to.be.an('object');
        expect(async2.name).to.equal('async2');

        expect(helloJane).to.be.an('object');
        expect(helloJane.name).to.equal('Jane');

        async1.testWidgetCollection();
        async2.testWidgetCollection();
    };
}

module.exports = Widget;