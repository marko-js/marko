var finalizeVDOMNodes = require('./finalizeVDOMNodes');
var isStaticValue = require('./isStaticValue');
var vdomEventListenersAttached = Symbol();

function attachEventListeners(context) {
    var data = context.data;
    if (!data[vdomEventListenersAttached]) {
        data[vdomEventListenersAttached] = true;

        context.on('afterTemplateRootBodyGenerated', function(event) {
            event.body = finalizeVDOMNodes(event.body, context);
        });
    }
}

exports.finalizeVDOMNodes = finalizeVDOMNodes;
exports.isStaticValue = isStaticValue;
exports.attachEventListeners = attachEventListeners;