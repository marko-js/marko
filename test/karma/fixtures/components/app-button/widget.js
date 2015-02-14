var expect = require('chai').expect;

function Widget(config) {
    this.name = 'app-button';
    window.testData.addWidget('app-button', this);

    var logOutput = this.logOutput = [];

    function log(data) {
        logOutput.push(data);
    }

    this.log = log;
    this.clicked = false;
}

Widget.prototype = {
    handleRootMouseDown: function(event, el) {
        this.clicked = true;
        expect(el.getAttribute('class')).to.equal('app-button');
        this.log('click');
        expect(this.name).to.equal('app-button');
    }
};

exports.Widget = Widget;