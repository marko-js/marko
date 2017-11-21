'use strict';
const resolveFrom = require('resolve-from');

function legacyGetDefaultComponentModule(dirname) {
    var filename;
    var legacy = true;

    if ((filename = resolveFrom(dirname, './widget'))) {
        return {
            filename,
            requirePath: './widget',
            legacy
        };
    } else if ((filename = resolveFrom(dirname, './component'))) {
        return {
            filename,
            requirePath: './component',
            legacy
        };
    } else if ((filename = resolveFrom(dirname, './'))) {
        return {
            filename,
            requirePath: './',
            legacy
        };
    } else {
        return null;
    }
}

function checkIsInnerBind(el) {
    var curNode = el;

    while (true) {
        if (curNode.data.hasBoundComponent) {
            return true;
        }

        curNode = curNode.parentNode;

        if (!curNode) {
            break;
        }
    }

    return false;
}

module.exports = function handleLegacyBind() {
    let el = this.el;
    let context = this.context;
    let builder = this.builder;

    let componentModule;
    let rendererModule;

    let isLegacyComponent = false;

    if (el.hasAttribute('w-bind')) {
        let bindAttr = el.getAttribute('w-bind');

        context.deprecate('Legacy components using w-bind and defineRenderer/defineComponent or defineComponent are deprecated. See: https://github.com/marko-js/marko/issues/421');
        this.isLegacyComponent = isLegacyComponent = true;
        context.setMeta('legacy', true);

        // Remove the w-bind attribute since we don't want it showing up in the output DOM
        el.removeAttribute('w-bind');

        // Read the value for the w-bind attribute. This will be an AST node for the parsed JavaScript
        let bindAttrValue = bindAttr.value;

        const hasWidgetTypes = context.isFlagSet('hasWidgetTypes');

        if (hasWidgetTypes) {
            context.deprecate('The <widget-types> tag is deprecated. Please remove it. See: https://github.com/marko-js/marko/issues/514');
        }

        if (bindAttrValue == null) {
            componentModule = legacyGetDefaultComponentModule(this.dirname);
            if (!componentModule) {
                this.addError('No corresponding JavaScript module found in the same directory (either "component.js" or "index.js").');
                return;
            }
        } else if (bindAttr.isLiteralValue()) {
             if (typeof bindAttr.literalValue !== 'string') {
                 this.addError('The value for the "w-bind" attribute should be a string. Actual: ' + componentModule);
                 return;
             }

             let requirePath = bindAttr.literalValue;
             let filename = resolveFrom(this.dirname, requirePath);

             if (!filename) {
                 this.addError('Target file not found: ' + requirePath + ' (from: ' + this.dirname + ')');
                 return;
             }

             componentModule = {
                 legacy: true,
                 filename,
                 requirePath
             };
        } else {
            // This is a dynamic expression. The <widget-types> should have been found.
            if (!hasWidgetTypes) {
                this.addError('The <widget-types> tag must be used to declare components when the value of the "w-bind" attribute is a dynamic expression.');
                return;
            }

            el.insertSiblingBefore(
                builder.functionCall(
                    builder.memberExpression(builder.identifier('__component'), builder.identifier('t')),
                    [
                        builder.memberExpression(
                            builder.identifier('marko_componentTypes'),
                            bindAttrValue,
                            true /* computed */)
                    ]));
        }
    } else {
        return;
    }

    let isLegacyInnerBind = checkIsInnerBind(el.parentNode);

    el.data.hasBoundComponent = true;

    // A component is bound to the el...

    if (el.hasAttribute('w-config')) {
        el.insertSiblingBefore(
            builder.functionCall(
                builder.memberExpression(builder.identifier('__component'), builder.identifier('c')),
                [
                    el.getAttributeValue('w-config')
                ]));

        el.removeAttribute('w-config');
    }

    let componentProps = {};

    let id = el.getAttributeValue('id');

    if (id) {
        componentProps.id = id;
    }

    this.convertToComponent({
      isLegacyInnerBind,
      componentModule,
      rendererModule,
      isLegacyComponent: true,
      rootNodes: [el]
    });
};
