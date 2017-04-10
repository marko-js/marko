'use strict';

var ComponentDef = require('./ComponentDef');
var initComponents = require('./init-components');
var EMPTY_OBJECT = {};

function GlobalComponentsContext(out) {
    this.$__roots = [];
    this.$__preserved = EMPTY_OBJECT;
    this.$__preservedBodies = EMPTY_OBJECT;
    this.$__componentsById = {};
    this.$__out = out;
}

GlobalComponentsContext.prototype = {
    $__initComponents: function (doc) {
        var topLevelComponentDefs = null;

        this.$__roots.forEach(function(root) {
            var children = root.$__children;
            if (children) {
                initComponents.$__initClientRendered(children, doc);
                if (topLevelComponentDefs === null) {
                    topLevelComponentDefs = children;
                } else {
                    topLevelComponentDefs = topLevelComponentDefs.concat(children);
                }
            }
        });

        this.$__roots = null;

        return topLevelComponentDefs;
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

function ComponentsContext(out, parentComponentsContext, shouldAddGlobalRoot) {
    var root;

    var globalComponentsContext;

    if (parentComponentsContext === undefined) {
        root = new ComponentDef(null, null, out);

        globalComponentsContext = out.global.components;
        if (globalComponentsContext === undefined) {
            out.global.components = globalComponentsContext = new GlobalComponentsContext(out);
        }

        if (shouldAddGlobalRoot !== false) {
            globalComponentsContext.$__roots.push(root);
        }
    } else {
        globalComponentsContext = parentComponentsContext.$__globalContext;
        var parentComponentStack = parentComponentsContext.$__componentStack;
        root = parentComponentStack[parentComponentStack.length-1];
    }

    this.$__globalContext = globalComponentsContext;
    this.$__out = out;
    this.$__componentStack = [root];
}

ComponentsContext.prototype = {
    $__createNestedComponentsContext: function(nestedOut) {
        return new ComponentsContext(nestedOut, this);
    },
    $__beginComponent: function(component) {
        var componentStack = this.$__componentStack;
        var origLength = componentStack.length;
        var parent = componentStack[origLength - 1];

        var componentId = component.id;

        if (!componentId) {
            componentId = component.id = parent.$__nextId();
        }

        var componentDef = new ComponentDef(component, componentId, this.$__out, componentStack, origLength);
        this.$__globalContext.$__componentsById[componentId] = componentDef;
        parent.$__addChild(componentDef);
        componentStack.push(componentDef);

        return componentDef;
    },

    $__nextComponentId: function() {
        var componentStack = this.$__componentStack;
        var parent = componentStack[componentStack.length - 1];
        return parent.$__nextId();
    }
};

function getComponentsContext(out) {
    return out.data.components || (out.data.components = new ComponentsContext(out));
}

module.exports = exports = ComponentsContext;

exports.$__getComponentsContext = getComponentsContext;
