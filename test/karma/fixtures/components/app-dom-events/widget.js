var expect = require('chai').expect;

function Widget(config) {
    var logOutput = [];

    this.name = 'app-dom-events';

    window.testData['app-dom-events'] = this;


    function log(data) {
        logOutput.push(data);
    }

    this.log = log;

    function triggerMouseEvent(el, type) {
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
    }

    // Trigger a click event on the root element
    triggerMouseEvent(this.el, 'click');
    expect(logOutput).to.deep.equal(['el:click']);

    logOutput = [];
    triggerMouseEvent(this.getEl('button'), 'click');
    expect(logOutput).to.deep.equal(['button:click', 'el:click']);

    logOutput = [];
    triggerMouseEvent(this.getEl('button').firstChild, 'click');
    expect(logOutput).to.deep.equal(['button:click', 'el:click']);

    logOutput = [];
    triggerMouseEvent(this.el, 'mousemove');
    expect(logOutput).to.deep.equal(['el:mousemove']);

    logOutput = [];
    triggerMouseEvent(this.getEl('button').firstChild, 'mousemove');
    expect(logOutput).to.deep.equal(['button>span:mousemove', 'el:mousemove']);

    logOutput = [];
    triggerMouseEvent(document.getElementById('fooLink'), 'dblclick');
    expect(logOutput).to.deep.equal(['#fooLink:dblclick']);

    logOutput = [];
    triggerMouseEvent(document.getElementById('fooLink'), 'mouseout');
    expect(logOutput).to.deep.equal(['#fooLink:mouseout']);

    logOutput = [];
    expect(this.widgets.appButton.clicked).to.equal(false);
    triggerMouseEvent(this.getEl('helloWorld'), 'mousedown');
    expect(logOutput).to.deep.equal(['#helloWorld:mousedown']);
    expect(this.widgets.appButton.clicked).to.equal(true);

    expect(Array.isArray(this._evHandles)).to.equal(true);

    var el = this.el;
    var fooLink = document.getElementById('fooLink');

    this.destroy();

    expect(this._evHandles).to.equal(null);

    // Make sure the widget is removed from the DOM tree

    expect(el.parentNode == null).to.equal(true);

    // Make sure there are no DOM event listeners
    logOutput = [];
    triggerMouseEvent(fooLink, 'mouseout');
    expect(logOutput).to.deep.equal([]);
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
    }

};

module.exports = Widget;