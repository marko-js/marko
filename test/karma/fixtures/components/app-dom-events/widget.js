var expect = require('chai').expect;

function Widget(config) {
    this.logOutput = [];

    this.name = 'app-dom-events';

    window.testData.addWidget('app-dom-events', this);

    var _this = this;
    function log(data) {
        _this.logOutput.push(data);
    }

    this.log = log;
    this.clearLog = function() {
        this.logOutput = [];
    };

    this.logOutput = [];

    this.triggerMouseEvent = function (el, type) {
        var ev = document.createEvent("MouseEvent");
        ev.initMouseEvent(
            type,
            true /* bubble */, true /* cancelable */,
            window, null,
            0, 0, 0, 0, /* coordinates */
            false, false, false, false, /* modifier keys */
            0 /*left*/, null
        );
        el.dispatchEvent(ev);
    };
}

Widget.prototype = {
    handleRootClick: function(event, el) {
        expect(el.getAttribute('class')).to.equal('app-dom-events');
        expect(event.target.tagName.length>0).to.equal(true);
        this.log('el:click');
        expect(this.name).to.equal('app-dom-events');
    },

    handleButtonClick: function() {
        this.log('button:click');
    },

    handleRootMouseMove: function() {
        this.log('el:mousemove');
    },

    handleButtonSpanMouseMove: function() {
        this.log('button>span:mousemove');
    },

    handleFooLinkDblClick: function() {
        this.log('#fooLink:dblclick');
    },

    handleFooLinkMouseOut: function(event, el) {
        expect(event.target).to.equal(el);
        this.log('#fooLink:mouseout');
    },

    handleHelloWorldMouseDown: function(event, el) {
        expect(this.getEl('helloWorld')).to.equal(el);
        this.log('#helloWorld:mousedown');
    },

    testDOMEvents: function() {
        // Trigger a click event on the root element
        this.triggerMouseEvent(this.el, 'click');
        expect(this.logOutput).to.deep.equal(['el:click']);

        this.clearLog();
        this.triggerMouseEvent(this.getEl('button'), 'click');
        expect(this.logOutput).to.deep.equal(['button:click', 'el:click']);

        this.clearLog();
        this.triggerMouseEvent(this.getEl('button').firstChild, 'click');
        expect(this.logOutput).to.deep.equal(['button:click', 'el:click']);

        this.clearLog();
        this.triggerMouseEvent(this.el, 'mousemove');
        expect(this.logOutput).to.deep.equal(['el:mousemove']);

        this.clearLog();
        this.triggerMouseEvent(this.getEl('button').firstChild, 'mousemove');
        expect(this.logOutput).to.deep.equal(['button>span:mousemove', 'el:mousemove']);

        this.clearLog();
        this.triggerMouseEvent(document.getElementById('fooLink'), 'dblclick');
        expect(this.logOutput).to.deep.equal(['#fooLink:dblclick']);

        this.clearLog();
        this.triggerMouseEvent(document.getElementById('fooLink'), 'mouseout');
        expect(this.logOutput).to.deep.equal(['#fooLink:mouseout']);

        this.clearLog();
        expect(this.widgets.appButton.clicked).to.equal(false);
        this.triggerMouseEvent(this.getEl('helloWorld'), 'mousedown');
        expect(this.logOutput).to.deep.equal(['#helloWorld:mousedown']);
        expect(this.widgets.appButton.clicked).to.equal(true);
    },

    testDestroy: function() {
        expect(Array.isArray(this._evHandles)).to.equal(true);

        var el = this.el;
        var fooLink = document.getElementById('fooLink');

        this.destroy();

        expect(this._evHandles).to.equal(null);

        // Make sure the widget is removed from the DOM tree

        expect(el.parentNode == null).to.equal(true);

        // Make sure there are no DOM event listeners
        this.clearLog();
        this.triggerMouseEvent(fooLink, 'mouseout');
        expect(this.logOutput).to.deep.equal([]);
    }

};

module.exports = Widget;