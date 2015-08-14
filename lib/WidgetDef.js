require('raptor-polyfill/string/endsWith');

var repeatedId = require('../lib/repeated-id');

function WidgetDef(config, endFunc, out) {
    this.type = config.type;
    this.id = config.id;
    this.config = config.config;
    this.state = config.state;
    this.scope = config.scope;
    this.domEvents = null;
    this.customEvents = config.customEvents;
    this.bodyElId = config.bodyElId;
    this.children = [];
    this.end = endFunc;
    this.extend = config.extend;
    this.existingWidget = config.existingWidget;
    this.out = out;
    this.hasDomEvents = config.hasDomEvents;
    this._nextId = 0;
}

WidgetDef.prototype = {
    addChild: function (widgetDef) {
        this.children.push(widgetDef);
    },
    elId: function (nestedId) {
        if (nestedId == null) {
            return this.id;
        } else {
            if (typeof nestedId === 'string' && nestedId.endsWith('[]')) {
                return repeatedId.nextId(this.out, this.id, nestedId);
            } else {
                return this.id + '-' + nestedId;
            }
        }
    },
    addDomEvent: function(type, targetMethod, elId) {
        if (!this.domEvents) {
            this.domEvents = [];
        }
        this.domEvents.push(type);
        this.domEvents.push(targetMethod);
        this.domEvents.push(elId);
    },
    getDomEventsAttr: function() {
        if (this.domEvents) {
            return this.domEvents.join(',');
        }
    },
    nextId: function() {
        return this.id + '-w' + (this._nextId++);
    }
};

module.exports = WidgetDef;