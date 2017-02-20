'use strict';
var ComponentArgs = require('./ComponentArgs');
var getRequirePath = require('../getRequirePath');
var buildComponentTypeNode = require('../util/buildComponentTypeNode');
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

        this.componentNextElId = 0;
        this.componentArgs = undefined;
        this.containingComponentNode = undefined;
        this._markoComponentsVar = context.data.markoComponentsVar;
        this.firstBind = false;
    }

    setHasBoundComponentForTemplate() {
        this.context.data[HAS_WIDGET_KEY] = true;
    }

    hasBoundComponentForTemplate() {
        return this.context.data[HAS_WIDGET_KEY] || this.context.data[WIDGET_PROPS_KEY] != null;
    }

    getComponentProps() {
        var componentProps = this.context.data[WIDGET_PROPS_KEY];
        if (!componentProps) {
            this.firstBind = true;
            componentProps = this.context.data[WIDGET_PROPS_KEY] = {};
        }
        return componentProps;
    }

    addError(message, code) {
        this.context.addError(this.el, message, code);
    }

    getComponentArgs() {
        return this.componentArgs || (this.componentArgs = new ComponentArgs());
    }

    nextUniqueId() {
        var componentNextElId = this.context.data.componentNextElId;
        if (componentNextElId == null) {
            this.context.data.componentNextElId = 0;
        }

        return (this.context.data.componentNextElId++);
    }

    getNestedIdExpression() {
        this.assignComponentId();
        return this.getComponentIdInfo().nestedIdExpression;
    }

    getIdExpression() {
        this.assignComponentId();
        return this.getComponentIdInfo().idExpression;
    }

    set componentIdInfo(value) {
        this.el.data.componentIdInfo = value;
    }

    get componentIdInfo() {
        return this.el.data.componentIdInfo;
    }

    getComponentIdInfo() {
        return this.componentIdInfo;
    }

    getCompileContext() {
        return this.context;
    }

    getDefaultComponentModule() {
        var dirname = this.dirname;

        if (this.context.data.componentModule) {
            return this.context.data.componentModule;
        } else if (resolveFrom(dirname, './component')) {
            return './component';
        } else if (resolveFrom(dirname, './component')) {
            return './component';
        } else if (resolveFrom(dirname, './')) {
            return './';
        } else {
            return null;
        }
    }

    getMarkoComponentsRequirePath(target) {
        return getRequirePath(target, this.context);
    }

    set markoComponentsVar(value) {
        this.context.data[MARKO_WIDGETS_VAR_KEY] = value;
    }

    get markoComponentsVar() {
        if (!this.context.data[MARKO_WIDGETS_VAR_KEY]) {
            this.context.data[MARKO_WIDGETS_VAR_KEY] =
                this.context.importModule(
                    'marko_components',
                    this.getMarkoComponentsRequirePath(this.isLegacyComponent ? 'marko/components/legacy' : 'marko/components'));
        }

        return this.context.data[MARKO_WIDGETS_VAR_KEY];
    }

    buildComponentElIdFunctionCall(id) {
        var builder = this.builder;

        var componentElId = builder.memberExpression(
            builder.identifier('component'),
            builder.identifier('elId'));

        return builder.functionCall(componentElId, arguments.length === 0 ? [] : [ id ]);
    }

    buildComponentTypeNode(path, def) {
        return buildComponentTypeNode(path, this.dirname, def, this);
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

TransformHelper.prototype.assignComponentId = require('./assignComponentId');
TransformHelper.prototype.handleRootNodes = require('./handleRootNodes');
TransformHelper.prototype.handleIncludeNode = require('./handleIncludeNode');
TransformHelper.prototype.handleComponentEvents = require('./handleComponentEvents');
TransformHelper.prototype.handleComponentPreserve = require('./handleComponentPreserve');
TransformHelper.prototype.handleComponentPreserveAttrs = require('./handleComponentPreserveAttrs');
TransformHelper.prototype.handleComponentBind = require('./handleComponentBind');
TransformHelper.prototype.handleComponentFor = require('./handleComponentFor');

module.exports = TransformHelper;
