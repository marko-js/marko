function WidgetDef(config, endFunc) {
    this.module = config.module;
    this.id = config.id;
    this.config = config.config;
    this.scope = config.scope;
    this.domEvents = config.domEvents;
    this.customEvents = config.customEvents;
    this.children = [];
    this.end = endFunc;
    this.extend = config.extend;
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