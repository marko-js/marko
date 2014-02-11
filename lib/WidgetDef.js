'use strict';
var extend = require('raptor-util').extend;

function WidgetDef(config) {
    /*
    this.type = null;
    this.id = null;
    this.assignedId = null;
    this.config = null;
    this.scope = null;
    this.events = null;
    this.parent = null;
    */
    this.children = [];
    extend(this, config);
}
WidgetDef.prototype = {
    addChild: function (widgetDef) {
        this.children.push(widgetDef);
    },
    elId: function (name) {
        if (arguments.length === 0) {
            return this.id;
        } else {
            return this.id + '-' + name;
        }
    }
};
module.exports = WidgetDef;