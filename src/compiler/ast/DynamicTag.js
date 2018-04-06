const HtmlElement = require("./HtmlElement");

class DynamicTag extends HtmlElement {
    constructor(el, tagNameExpression) {
        super(el);
        this.type = "DynamicTag";
        this.tagNameExpression = tagNameExpression;
    }
    generateCode(codegen) {
        var context = codegen.context;
        var builder = codegen.builder;
        var dynamicTag = context.helper("dynamicTag");
        var attributes = this.getAttributes().map(attr =>
            builder.property(builder.identifier(attr.name), attr.value)
        );

        if (this.body && this.body.length) {
            attributes.push(
                builder.property(
                    builder.identifier("renderBody"),
                    builder.renderBodyFunction(this.body)
                )
            );
        }

        return codegen.generateCode(
            this.generateRenderTagCode(codegen, dynamicTag, [
                builder.identifier("out"),
                this.tagNameExpression,
                builder.objectExpression(attributes)
            ])
        );
    }
    generateRenderTagCode(codegen, tagVar, tagArgs) {
        return codegen.builder.functionCall(tagVar, tagArgs);
    }
}

module.exports = DynamicTag;
