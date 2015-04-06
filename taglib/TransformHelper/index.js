var fs = require('fs');
var nodePath = require('path');

function TransformHelper(node, compiler, template) {
    this.node = node;
    this.template = template;
    this.compiler = compiler;
    this.nodeProps = node.getProperties();

    this.widgetNextElId = 0;
    this.widgetIdInfo = undefined;
    this.widgetArgs = undefined;
    this.containingWidgetNode = undefined;
}

TransformHelper. prototype = {
    getWidgetArgs: function() {
        return this.widgetArgs || (this.widgetArgs = {});
    },
    nextUniqueId: function() {
        var widgetNextElId = this.template.data.widgetNextElId;
        if (widgetNextElId == null) {
            this.template.data.widgetNextElId = 0;
        }

        return (this.template.data.widgetNextElId++);
    },
    getNestedIdExpression: function() {
        this.assignWidgetId();
        return this.getWidgetIdInfo().nestedIdExpression;
    },
    getIdExpression: function() {
        this.assignWidgetId();
        return this.getWidgetIdInfo().idExpression;
    },
    getWidgetIdInfo: function() {
        return this.widgetIdInfo;
    },
    getDefaultWidgetModule: function() {
        var dirname = this.template.dirname;
        if (fs.existsSync(nodePath.join(dirname, 'widget.js'))) {
            return './widget';
        } else if (fs.existsSync(nodePath.join(dirname, 'index.js'))) {
            return './';
        } else {
            return null;
        }
    },
    assignWidgetId: require('./assignWidgetId'),
    registerWidgetType: require('./registerWidgetType'),
    getContainingWidgetNode: require('./getContainingWidgetNode'),
    compileWidgetArgs: require('./compileWidgetArgs'),
    handleWidgetEvents: require('./handleWidgetEvents'),
    handleWidgetPreserve: require('./handleWidgetPreserve'),
    handleWidgetBody: require('./handleWidgetBody'),
    handleWidgetBind: require('./handleWidgetBind'),
    handleWidgetExtend: require('./handleWidgetExtend'),
    handleWidgetFor: require('./handleWidgetFor')
};

module.exports = TransformHelper;