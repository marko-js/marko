var expect = require('chai').expect;

exports.Widget = function(config) {
    this.asyncWidget = true;
    this.name = config.name;

    var helloWidget = this.getWidget('hello');

    this.test = function() {
        expect(helloWidget).to.be.an('object');
        expect(helloWidget.name).to.equal('Async');
    };
};