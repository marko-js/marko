module.exports = function handleWidgetBody() {
    var props = this.nodeProps;
    var template = this.template;
    var node = this.node;
    var compiler = this.compiler;

    var widgetBody = props['w-body'];
    if (widgetBody == null) {
        return;
    }

    var widgetTagNode = this.getContainingWidgetNode();
    var idExpression;

    if (widgetBody) {
        this.assignWidgetId(true /* repeated */);




        var nextVarId = template.data.nextWidgetBodyId;
        if (nextVarId == null) {
            nextVarId = template.data.nextWidgetBodyId = 0;
        }

        var idVarName = '__widgetBody' + (template.data.nextWidgetBodyId++);

        var varNode = compiler.createNode('var', {
            name: idVarName,
            value: this.getIdExpression()
        });

        node.parentNode.insertBefore(varNode, node);


        idExpression = template.makeExpression(idVarName);
        if (node.tag) {
            this.getWidgetArgs().setId(template.makeExpression('"!"+' + idExpression));
        } else {
            node.setAttribute('id', idExpression);
        }
    } else {
        widgetBody = 'data.widgetBody';

        if (widgetTagNode) {
            widgetTagNode.setProperty('body', this.getNestedIdExpression());
        }

        idExpression = this.getIdExpression();
    }

    this.node.appendChild(this.compiler.createNode('w-body', {
        id: idExpression,
        body: widgetBody
    }));
};