module.exports = function handleWidgetBody() {
    var props = this.nodeProps;

    var widgetBody = props['w-body'];
    if (widgetBody == null) {
        return;
    }

    if (widgetBody === '') {
        widgetBody = 'data.widgetBody';
    }

    var widgetTagNode = this.getContainingWidgetNode();

    if (widgetTagNode) {
        widgetTagNode.setProperty('body', this.getNestedIdExpression());
    }

    this.node.appendChild(this.compiler.createNode('w-body', {
        id: this.getIdExpression(),
        body: widgetBody
    }));
}