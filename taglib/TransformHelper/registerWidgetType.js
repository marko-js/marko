var markoWidgets;

function registerWidgetType(target) {
    var template = this.template;
    var compiler = this.compiler;

    var typePathExpression;
    var targetExpression;

    template.addStaticVar('__markoWidgets', 'require("marko-widgets")');

    if (compiler.hasExpression(target)) {
        return '__markoWidgets.getDynamicClientWidgetPath(' + compiler.convertType(target, 'string', true) + ')';
    }

    // Resolve the static string to a full path at compile time
    typePathExpression = template.addStaticVar(
        target,
        JSON.stringify(markoWidgets.getClientWidgetPath(target, template.dirname)));

    targetExpression = 'require(' + JSON.stringify(target) + ')';

    var widgetTypes = template.data.widgetTypes;

    if (!widgetTypes) {
        template.data.widgetTypes = widgetTypes = [];

        var registerWidgetNode = compiler.createNode('w-register-widget', {
            widgetTypes: widgetTypes
        });

        template.rootNode.insertBefore(registerWidgetNode, template.rootNode.firstChild);
    }

    widgetTypes.push({
        name: typePathExpression,
        target: targetExpression
    });

    return typePathExpression;
}

module.exports = registerWidgetType;

// Late initialization to avoid potential circular dependency problems
markoWidgets = require('../../');