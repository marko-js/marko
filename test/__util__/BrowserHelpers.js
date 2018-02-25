var expect = require('chai').expect;
var path = require('path');
var assert = require('assert');
var markoComponents = require('marko/components');

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
        var $global = input && input.$global;
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
            var meta = component.meta;
            this.components.push({
                instance: instance,
                type: meta && meta.id,
                logic: meta && meta.component && path.resolve(path.dirname(component.path), meta.component),
                template: component.path,
                input: input,
                $global: $global
            });
        }

        return instance;
    },

    mountLegacy: function (def, input) {
        var $global = input && input.$global;
        var renderer = require(def.renderer || def.component || def.template);
        var renderResult = renderer.renderSync(input).appendTo(this.targetEl);
        var instance;
        try {
            instance = renderResult.getComponent();
        } catch (e) {
            if (e.toString().indexOf('No component') === -1) {
                throw e;
            }
        }

        if (instance) {
            this.components.push({
                instance: instance,
                type: instance.___type,
                logic: this.cleanPath(def.widget || def.component),
                template: this.cleanPath(def.renderer || def.component || def.template),
                input: input,
                $global: $global
            });
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

    cleanPath: function (path) {
        return path.replace(/\.\d+\.in-module-context$/, '');
    }
};

module.exports = BrowserHelpers;
