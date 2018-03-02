'use strict';
var ComponentArgsCompiler = require('./ComponentArgsCompiler');
var getRequirePath = require('../getRequirePath');

var MARKO_WIDGETS_VAR_KEY = Symbol('MARKO_WIDGETS_VAR');
var WIDGET_PROPS_KEY;
var HAS_COMPONENT_KEY = Symbol('HAS_WIDGET');

class TransformHelper {
    constructor(el, context) {
        this.el = el;
        this.context = context;
        this.builder = context.builder;
        this.dirname = context.dirname;
        this.filename = context.filename;

        this.componentNextElId = 0;
        this.componentArgs = undefined;
        this.containingComponentNode = undefined;
        this._markoComponentsVar = context.data.markoComponentsVar;
        this.firstBind = false;
        this.componentModule = null;
        this.rendererModule = null;
    }

    setHasBoundComponentForTemplate() {
        this.context.isComponent = true;

        this.context.data[HAS_COMPONENT_KEY] = true;
    }

    getTemplateModule() {
        return {
            requirePath:this.context.getRequirePath(this.filename)
        };
    }

    hasBoundComponentForTemplate() {
        return this.context.data.componentModule != null ||
            this.context.data[HAS_COMPONENT_KEY] ||
            this.context.data[WIDGET_PROPS_KEY] != null;
    }

    addError(message, code) {
        this.context.addError(this.el, message, code);
    }

    getComponentArgs() {
        return this.componentArgs || (this.componentArgs = new ComponentArgsCompiler());
    }

    nextUniqueId() {
        var componentNextElId = this.context.data.componentNextElId;
        if (componentNextElId == null) {
            this.context.data.componentNextElId = 0;
        }

        return (this.context.data.componentNextElId++);
    }

    serializeKey() {
        var el = this.el;
        var key = el.key;
        var context = this.context;
        var builder = this.builder;
        
        if (!this.__keySerialized && context.isServerTarget() && context.isSplitComponent) {
            var markoKeyAttrVar = context.importModule('marko_keyAttr',
                this.getMarkoComponentsRequirePath('marko/components/taglib/helpers/markoKeyAttr'));

            el.setAttributeValue('data-marko-key', builder.functionCall(markoKeyAttrVar, [
                key,
                builder.identifier('__component')
            ]));
            
            this.__keySerialized = true;
        }
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

        if (id.type === 'Literal' && id.value === '') {
            let componentElId = builder.memberExpression(
                builder.identifier('__component'),
                builder.identifier('id'));

            return componentElId;
        } else {
            let componentElId = builder.memberExpression(
                builder.identifier('__component'),
                builder.identifier('elId'));

            return builder.functionCall(componentElId, arguments.length === 0 ? [] : [ id ]);
        }
    }

    getTransformHelper(el) {
        return new TransformHelper(el, this.context);
    }
}

TransformHelper.prototype.assignComponentId = require('./assignComponentId');
TransformHelper.prototype.convertToComponent = require('./convertToComponent');
TransformHelper.prototype.handleRootNodes = require('./handleRootNodes');
TransformHelper.prototype.handleComponentEvents = require('./handleComponentEvents');
TransformHelper.prototype.handleComponentPreserve = require('./handleComponentPreserve');
TransformHelper.prototype.handleComponentPreserveAttrs = require('./handleComponentPreserveAttrs');
TransformHelper.prototype.handleScopedAttrs = require('./handleScopedAttrs');
TransformHelper.prototype.handleLegacyBind = require('./handleLegacyBind');

module.exports = TransformHelper;
