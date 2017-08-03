'use strict';
var GlobalComponentsContext = require('./GlobalComponentsContext');

function ComponentsContext(out, parentComponentsContext) {
    var globalComponentsContext;
    var componentDef;
    var components;

    if (parentComponentsContext) {
        components = parentComponentsContext.___components;
        globalComponentsContext = parentComponentsContext.___globalContext;
        componentDef = parentComponentsContext.___componentDef;
    } else {
        globalComponentsContext = out.global.___components;
        if (globalComponentsContext === undefined) {
            out.global.___components = globalComponentsContext = new GlobalComponentsContext(out);
        }
        components = [];
    }

    this.___globalContext = globalComponentsContext;
    this.___components = components;
    this.___out = out;
    this.___componentDef = componentDef;
}

ComponentsContext.prototype = {
    ___initComponents: function(doc) {
        var componentDefs = this.___components;

        ComponentsContext.___initClientRendered(componentDefs, doc);

        this.___out.emit('___componentsInitialized');

        // Reset things stored in global since global is retained for
        // future renders
        this.___out.global.___components = undefined;

        return componentDefs;
    },
};

function getComponentsContext(out) {
    return out.___components || (out.___components = new ComponentsContext(out));
}

module.exports = exports = ComponentsContext;

exports.___getComponentsContext = getComponentsContext;
