require('raptor-polyfill/string/endsWith');

var repeatedId = require('../lib/repeated-id');

function WidgetDef(config, endFunc, out) {
    this.module = config.module;
    this.id = config.id;
    this.config = config.config;
    this.state = config.state;
    this.scope = config.scope;
    this.domEvents = config.domEvents;
    this.customEvents = config.customEvents;
    this.children = [];
    this.end = endFunc;
    this.extend = config.extend;
    this.existingWidget = config.existingWidget;
    this.out = out;
}

WidgetDef.prototype = {
    addChild: function (widgetDef) {
        this.children.push(widgetDef);
    },
    elId: function (nestedId) {
        if (nestedId == null) {
            return this.id;
        } else {
            if (nestedId.endsWith('[]')) {
                nestedId = repeatedId.nextId(this.out, this.id, nestedId);
            }

            return this.id + '-' + nestedId;
        }
    }
};

module.exports = WidgetDef;