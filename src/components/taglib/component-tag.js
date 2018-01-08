'use strict';

var BIND_WIDGET_KEY = Symbol();
module.exports = function codeGenerator(el, codegen) {
    var builder = codegen.builder;
    var context = codegen.context;

    var bodyFunc = builder.renderBodyFunction(el.body, [
            builder.identifierOut(),
            builder.identifier('__component'),
            builder.identifier('state')
        ]);


    var componentProps = el.getAttributeValue('props');
    
    var bindComponentVar = context.importModule(
        'marko_bindComponent',
        'marko/components/taglib/helpers/bindComponent');

    if (context.data[BIND_WIDGET_KEY] == null) {
        context.data[BIND_WIDGET_KEY] = 0;
    }

    var varName = context.addStaticVar(
        'marko_bindComponent' + (context.data[BIND_WIDGET_KEY]++),
        builder.functionCall(bindComponentVar, [
                componentProps
            ]));

    return builder.functionCall(varName, [bodyFunc, builder.identifierOut()]);
};
