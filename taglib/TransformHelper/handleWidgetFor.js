module.exports = function handleWidgetFor() {
    var nodeProps = this.nodeProps;
    var widgetFor = nodeProps['w-for'];

    if (widgetFor == null) {
        return;
    }

    var node = this.node;
    var template = this.template;
    var compiler = this.compiler;

    // Handle the "w-for" attribute
    if (node.hasAttribute('for')) {
        node.addError('The "w-for" attribute cannot be used in conjuction with the "for" attribute');
    } else {
        node.setAttribute(
            'for',
            template.makeExpression('widget.elId(' +
                compiler.convertType(widgetFor, 'string', true) +
                ')'));
    }
}