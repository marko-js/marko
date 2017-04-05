'use strict';

var ComponentDef = require('./ComponentDef');
var initComponents = require('./init-components');
var isServer = require('./util').$__isServer === true;

var EMPTY_OBJECT = {};

function ComponentsContext(out, root) {
    if (!root) {
        root = new ComponentDef(null, null, out);
    }

    this.$__out = out;
    this.$__componentStack = [root];
    this.$__preserved = EMPTY_OBJECT;
    this.$__preservedBodies = EMPTY_OBJECT;
    this.$__componentsById = {};
    this.$__rerenderComponent = undefined;
}

ComponentsContext.prototype = {
    get $__components() {
        return this.$__componentStack[0].$__children;
    },

    $__beginComponent: function(component, isSplitComponent) {
        var self = this;
        var componentStack = self.$__componentStack;
        var origLength = componentStack.length;
        var parent = componentStack[origLength - 1];

        var componentId = component.id;

        if (!componentId) {
            componentId = component.id = parent.$__nextId();
        }

        var out = this.$__out;

        var componentDef = new ComponentDef(component, componentId, out, componentStack, origLength);
        if (isServer) {
            // On the server
            if (parent.$__willRerenderInBrowser === true) {
                componentDef.$__willRerenderInBrowser = true;
            } else {
                parent.$__addChild(componentDef);
                if (isSplitComponent === false && out.global.noBrowserRerender !== true) {
                    componentDef.$__willRerenderInBrowser = true;
                }
            }
        } else {
            parent.$__addChild(componentDef);
            this.$__componentsById[componentId] = componentDef;
        }

        componentStack.push(componentDef);

        return componentDef;
    },
    $__clearComponents: function () {
        this.$__componentStack = [new ComponentDef(null /* id */, this.$__out)];
    },
    $__initComponents: function (doc) {
        var componentDefs = this.$__components;
        if (componentDefs) {
            initComponents.$__initClientRendered(componentDefs, doc);
            this.$__clearComponents();
        }
    },
    $__nextComponentId: function() {
        var componentStack = this.$__componentStack;
        var parent = componentStack[componentStack.length - 1];
        return parent.$__nextId();
    },
    $__preserveDOMNode: function(elId, bodyOnly) {
        var preserved = bodyOnly === true ? this.$__preservedBodies : this.$__preserved;
        if (preserved === EMPTY_OBJECT) {
            if (bodyOnly === true) {
                preserved = this.$__preservedBodies = {};
            } else {
                preserved = this.$__preserved = {};
            }
        }
        preserved[elId] = true;
    }
};

ComponentsContext.$__getComponentsContext = function (out) {
    var global = out.global;

    return out.data.components ||
        global.components ||
        (global.components = new ComponentsContext(out));
};

module.exports = ComponentsContext;
