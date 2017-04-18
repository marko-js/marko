'use strict';

var ComponentDef = require('./ComponentDef');
var componentsUtil = require('./util');
var isServer = componentsUtil.$__isServer === true;

var EMPTY_OBJECT = {};

function GlobalComponentsContext(out) {
    this.$__roots = [];
    this.$__preserved = EMPTY_OBJECT;
    this.$__preservedBodies = EMPTY_OBJECT;
    this.$__componentsById = {};
    this.$__out = out;
    this.$__rerenderComponent = undefined;
    this.$__nextIdLookup = null;
    this.$__nextComponentId = componentsUtil.$__nextComponentIdProvider(out);
}

GlobalComponentsContext.prototype = {
    $__initComponents: function(doc) {
        var topLevelComponentDefs = null;

        this.$__roots.forEach(function(root) {
            var children = root.$__children;
            if (children) {
                // NOTE: ComponentsContext.$__initClientRendered is provided by
                //       index-browser.js to avoid a circular dependency
                ComponentsContext.$__initClientRendered(children, doc);
                if (topLevelComponentDefs === null) {
                    topLevelComponentDefs = children;
                } else {
                    topLevelComponentDefs = topLevelComponentDefs.concat(children);
                }
            }
        });

        this.$__roots = null;

        // Reset things stored in global since global is retained for
        // future renders
        this.$__out.global.components = undefined;

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
    },
    $__nextRepeatedId: function(parentId, id) {
        var nextIdLookup = this.$__nextIdLookup || (this.$__nextIdLookup = {});

        var indexLookupKey = parentId + '-' + id;
        var currentIndex = nextIdLookup[indexLookupKey];
        if (currentIndex == null) {
            currentIndex = nextIdLookup[indexLookupKey] = 0;
        } else {
            currentIndex = ++nextIdLookup[indexLookupKey];
        }

        return indexLookupKey.slice(0, -2) + '[' + currentIndex + ']';
    }
};

function ComponentsContext(out, parentComponentsContext, shouldAddGlobalRoot) {
    var root;

    var globalComponentsContext;

    if (parentComponentsContext === undefined) {
        globalComponentsContext = out.global.components;
        if (globalComponentsContext === undefined) {
            out.global.components = globalComponentsContext = new GlobalComponentsContext(out);
        }

        root = new ComponentDef(null, null, globalComponentsContext);

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
    $__beginComponent: function(component, isSplitComponent) {
        var componentStack = this.$__componentStack;
        var origLength = componentStack.length;
        var parentComponentDef = componentStack[origLength - 1];

        var componentId = component.id;

        var componentDef = new ComponentDef(component, componentId, this.$__globalContext, componentStack, origLength);
        if (isServer) {
            // On the server
            if (parentComponentDef.$__willRerenderInBrowser === true) {
                componentDef.$__willRerenderInBrowser = true;
            } else {
                parentComponentDef.$__addChild(componentDef);
                if (isSplitComponent === false && this.$__out.global.noBrowserRerender !== true) {
                    componentDef.$__willRerenderInBrowser = true;
                }
            }
        } else {
            parentComponentDef.$__addChild(componentDef);
            this.$__globalContext.$__componentsById[componentId] = componentDef;
        }

        componentStack.push(componentDef);

        return componentDef;
    },

    $__nextComponentId: function() {
        var componentStack = this.$__componentStack;
        var parentComponentDef = componentStack[componentStack.length - 1];
        return parentComponentDef.$__nextComponentId();
    }
};

function getComponentsContext(out) {
    return out.data.components || (out.data.components = new ComponentsContext(out));
}

module.exports = exports = ComponentsContext;

exports.$__getComponentsContext = getComponentsContext;
