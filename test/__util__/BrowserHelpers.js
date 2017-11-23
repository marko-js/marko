var expect = require('chai').expect;
var assert = require('assert');
var markoComponents = require('marko/components');

var Promise = require('promise-polyfill');

// To add to window
if (typeof window !== 'undefined' && !window.Promise) {
    window.Promise = Promise;
}

function BrowserHelpers() {
    this.logOutput = [];
    this.components = [];
}

BrowserHelpers.prototype = {
    triggerEvent: function (el, type) {
        var ev = document.createEvent("Event");
        ev.initEvent(type, true, true);
        el.dispatchEvent(ev);
    },

    triggerMouseEvent: function (el, type) {
        var ev = document.createEvent("MouseEvent");
        ev.initMouseEvent(type, true /* bubble */, true /* cancelable */
        , window, null, 0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null);
        el.dispatchEvent(ev);
    },

    triggerClick: function (el) {
        this.triggerMouseEvent(el, 'click');
    },

    triggerMouseMove: function (el) {
        this.triggerMouseEvent(el, 'mousemove');
    },

    mount: function (component, input) {
        var renderResult = component.renderSync(input).appendTo(this.targetEl);

        var instance;
        try {
            instance = renderResult.getComponent();
        } catch (e) {
            if (e.toString().indexOf('No component') === -1) {
                throw e;
            }
        }

        if (instance) {
            this.components.push(instance);
        }

        return instance;
    },

    log: function (data) {
        this.logOutput.push(data);
    },

    getComponentForEl: function (el) {
        return markoComponents.getComponentForEl(el);
    },

    get targetEl() {
        return document.getElementById('testsTarget');
    },

    nodeListToArray: function (nodes) {
        var nodeArray = new Array(nodes.length);
        for (var i = 0; i < nodes.length; i++) {
            nodeArray[i] = nodes[i];
        }
        return nodeArray;
    },

    checkChildrenMatch: function (children1, children2) {
        expect(children1.length).to.equal(children2.length);

        for (var i = 0; i < children1.length; i++) {
            var child1 = children1[i];
            var child2 = children2[i];
            assert.ok(child1 === child2, 'Children at index ' + i + ' do not match. child 1: ' + child1 + ' child 2: ' + child2);
        }
    },

    _cleanup: function () {
        this.components.forEach(function (component) {
            component.destroy();
        });

        this.components = [];

        this.targetEl.innerHTML = '';
    }
};

module.exports = BrowserHelpers;