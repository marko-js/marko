'use strict';
var WidgetArgs = require('./WidgetArgs');
var getRequirePath = require('../getRequirePath');
var buildWidgetTypeNode = require('../util/buildWidgetTypeNode');
var resolveFrom = require('resolve-from');
var INLINE_COMPONENT_KEY = Symbol('INLINE_COMPONENT');
var MARKO_WIDGETS_VAR_KEY = Symbol('MARKO_WIDGETS_VAR');
var WIDGET_PROPS_KEY;
var HAS_WIDGET_KEY = Symbol('HAS_WIDGET');

class TransformHelper {
    constructor(el, context) {
        this.el = el;
        this.context = context;
        this.builder = context.builder;
        this.dirname = context.dirname;

        this.widgetNextElId = 0;
        this.widgetArgs = undefined;
        this.containingWidgetNode = undefined;
        this._markoWidgetsVar = context.data.markoWidgetsVar;
        this.firstBind = false;
    }

    setHasBoundWidgetForTemplate() {
        this.context.data[HAS_WIDGET_KEY] = true;
    }

    hasBoundWidgetForTemplate() {
        return this.context.data[HAS_WIDGET_KEY] || this.context.data[WIDGET_PROPS_KEY] != null;
    }

    getWidgetProps() {
        var widgetProps = this.context.data[WIDGET_PROPS_KEY];
        if (!widgetProps) {
            this.firstBind = true;
            widgetProps = this.context.data[WIDGET_PROPS_KEY] = {};
        }
        return widgetProps;
    }

    addError(message, code) {
        this.context.addError(this.el, message, code);
    }

    getWidgetArgs() {
        return this.widgetArgs || (this.widgetArgs = new WidgetArgs());
    }

    nextUniqueId() {
        var widgetNextElId = this.context.data.widgetNextElId;
        if (widgetNextElId == null) {
            this.context.data.widgetNextElId = 0;
        }

        return (this.context.data.widgetNextElId++);
    }

    getNestedIdExpression() {
        this.assignWidgetId();
        return this.getWidgetIdInfo().nestedIdExpression;
    }

    getIdExpression() {
        this.assignWidgetId();
        return this.getWidgetIdInfo().idExpression;
    }

    set widgetIdInfo(value) {
        this.el.data.widgetIdInfo = value;
    }

    get widgetIdInfo() {
        return this.el.data.widgetIdInfo;
    }

    getWidgetIdInfo() {
        return this.widgetIdInfo;
    }

    getCompileContext() {
        return this.context;
    }

    getDefaultWidgetModule() {
        var dirname = this.dirname;
        if (resolveFrom(dirname, './component')) {
            return './component';
        } else if (resolveFrom(dirname, './widget')) {
            return './widget';
        } else if (resolveFrom(dirname, './')) {
            return './';
        } else {
            return null;
        }
    }

    getMarkoWidgetsRequirePath(target) {
        return getRequirePath(target, this.context);
    }

    set markoWidgetsVar(value) {
        this.context.data[MARKO_WIDGETS_VAR_KEY] = value;
    }

    get markoWidgetsVar() {
        if (!this.context.data[MARKO_WIDGETS_VAR_KEY]) {
            this.context.data[MARKO_WIDGETS_VAR_KEY] =
                this.context.importModule(
                    'marko_widgets',
                    this.getMarkoWidgetsRequirePath(this.isLegacyWidget ? 'marko/widgets/legacy' : 'marko/widgets'));
        }

        return this.context.data[MARKO_WIDGETS_VAR_KEY];
    }

    buildWidgetElIdFunctionCall(id) {
        var builder = this.builder;

        var widgetElId = builder.memberExpression(
            builder.identifier('widget'),
            builder.identifier('elId'));

        return builder.functionCall(widgetElId, arguments.length === 0 ? [] : [ id ]);
    }

    buildWidgetTypeNode(path, def) {
        return buildWidgetTypeNode(path, this.dirname, def, this);
    }

    getTransformHelper(el) {
        return new TransformHelper(el, this.context);
    }

    setInlineComponent(inlineComponent) {
        this.context.data[INLINE_COMPONENT_KEY] = inlineComponent;
    }

    getInlineComponent() {
        return this.context.data[INLINE_COMPONENT_KEY];
    }

    hasInlineComponent() {
        return this.context.data[INLINE_COMPONENT_KEY] != null;
    }
}

TransformHelper.prototype.assignWidgetId = require('./assignWidgetId');
TransformHelper.prototype.handleRootNodes = require('./handleRootNodes');
TransformHelper.prototype.handleIncludeNode = require('./handleIncludeNode');
TransformHelper.prototype.handleWidgetEvents = require('./handleWidgetEvents');
TransformHelper.prototype.handleWidgetPreserve = require('./handleWidgetPreserve');
TransformHelper.prototype.handleWidgetPreserveAttrs = require('./handleWidgetPreserveAttrs');
TransformHelper.prototype.handleWidgetBind = require('./handleWidgetBind');
TransformHelper.prototype.handleWidgetFor = require('./handleWidgetFor');

module.exports = TransformHelper;
