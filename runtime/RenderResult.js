var domInsert = require('./dom-insert');

function checkAddedToDOM(result, method) {
    if (!result.$__components) {
        throw Error('Not added to DOM');
    }
}

function getComponentDefs(result) {
    var componentDefs = result.$__components;

    if (componentDefs.length === 0) {
        throw Error('No component');
    }
    return componentDefs;
}

function RenderResult(out) {
   this.out = this.$__out = out;
   this.$__components = null;
}

module.exports = RenderResult;

var proto = RenderResult.prototype = {
    getComponent: function() {
        checkAddedToDOM(this, 'getComponent');

        var rerenderComponentInfo = this.$__out.global.$w;
        var rerenderComponent = rerenderComponentInfo && rerenderComponentInfo[0];
        if (rerenderComponent) {
            return rerenderComponent;
        }

        return getComponentDefs(this)[0].$__component;
    },
    getComponents: function(selector) {
        checkAddedToDOM(this, 'getComponents');

        var componentDefs = getComponentDefs(this);

        var components = [];
        var i;

        for (i = 0; i < componentDefs.length; i++) {
            var component = componentDefs[i].$__component;
            if (!selector || selector(component)) {
                components.push(component);
            }
        }

        return components;
    },

    afterInsert: function(doc) {
        var out = this.$__out;
        var componentsContext = out.global.components;
        if (componentsContext) {
            this.$__components = componentsContext.$__components;
            componentsContext.$__initComponents(doc);
        }

        return this;
    },
    getNode: function(doc) {
        return this.$__out.$__getNode(doc);
    },
    getOutput: function() {
        return this.$__out.$__getOutput();
    },
    toString: function() {
        return this.$__out.toString();
    },
    toJSON: function() {
        return this.$__out.$__getOutput();
    },
    document: typeof document !== 'undefined' && document
};

// Add all of the following DOM methods to Component.prototype:
// - appendTo(referenceEl)
// - replace(referenceEl)
// - replaceChildrenOf(referenceEl)
// - insertBefore(referenceEl)
// - insertAfter(referenceEl)
// - prependTo(referenceEl)
domInsert(
    proto,
    function getEl(renderResult, referenceEl) {
        return renderResult.getNode(referenceEl.ownerDocument);
    },
    function afterInsert(renderResult, referenceEl) {
        return renderResult.afterInsert(referenceEl.ownerDocument);
    });