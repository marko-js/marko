var expect = require('chai').expect;

var Component = {
    onCreate: function () {
        this.logOutput = [];

        this.name = 'app-dom-events';

        var _this = this;
        function log(data) {
            _this.logOutput.push(data);
        }

        this.log = log;
        this.clearLog = function () {
            this.logOutput = [];
        };

        this.logOutput = [];
    },

    handleRootClick: function (event, el) {
        expect(el.getAttribute('class')).to.equal('app-dom-events');
        expect(event.target.tagName.length > 0).to.equal(true);
        this.log('el:click');
        expect(this.name).to.equal('app-dom-events');
    },

    handleButtonClick: function () {
        this.log('button:click');
    },

    handleRootMouseMove: function () {
        this.log('el:mousemove');
    },

    handleButtonSpanMouseMove: function () {
        this.log('button>span:mousemove');
    },

    handleFooLinkDblClick: function () {
        this.log('#fooLink:dblclick');
    },

    handleFooLinkMouseOut: function (event, el) {
        expect(event.target).to.equal(el);
        this.log('#fooLink:mouseout');
    },

    handleHelloWorldMouseDown: function (event, el) {
        expect(this.getEl('helloWorld')).to.equal(el);
        this.log('#helloWorld:mousedown');
    }
};

module.exports = Component;