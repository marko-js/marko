'use strict';

var HtmlElement = require('./HtmlElement');
var removeDashes = require('../util/removeDashes');
var removeEscapeFunctions = require('../util/removeEscapeFunctions');
var safeVarName = require('../util/safeVarName');

function getNestedTagParentNode(nestedTagNode, parentTagName) {
    var currentNode = nestedTagNode.parentNode;
    while (currentNode) {
        if (currentNode.type === 'CustomTag' && currentNode.tagDef.name === parentTagName) {
            return currentNode;
        }

        currentNode = currentNode.parentNode;
    }
}

function buildInputProps(node, context) {
    var tagDef = node.tagDef;
    var inputProps = {};

    node.forEachAttribute((attr) => {
        var attrName = attr.name;

        var attrDef = attr.def || context.taglibLookup.getAttribute(node.tagName, attr.name);
        var attrValue = removeEscapeFunctions(attr.value);

        if (!attrDef) {
            return; // Skip over attributes that are not supported
        }

        var propName;
        var parentPropName;

        if (attrDef.dynamicAttribute) {
            // Dynamic attributes are allowed attributes
            // that are not declared (i.e. "*" attributes)
            //
            if (attrDef.preserveName === false) {
                propName = removeDashes(attrName);
            } else {
                propName = attrName;
            }

            if (attrDef.targetProperty) {
                parentPropName = attrDef.targetProperty;
            }
        } else {
            // Attributes map to properties and we allow the taglib
            // author to control how an attribute name resolves
            // to a property name.
            if (attrDef.targetProperty) {
                propName = attrDef.targetProperty;
            } else if (attrDef.preserveName) {
                propName = attr.name;
            } else {
                propName = removeDashes(attr.name);
            }
        }

        if (parentPropName) {
            let parent = inputProps[parentPropName] = (inputProps[parentPropName] = {});
            parent[propName] = attrValue;
        } else {
            inputProps[propName] = attrValue;
        }
    });

    tagDef.forEachImportedVariable(function(importedVariable) {
        let propName = importedVariable.targetProperty;
        let propExpression = importedVariable.expression;

        inputProps[propName] = propExpression;
    });

    return inputProps;
}

function getNextNestedTagVarName(tagDef, context) {
    var key = 'customTag' + tagDef.name;

    var nestedTagVarInfo = context.data[key] || (context.data[key] = {
        next: 0
    });


    return safeVarName(tagDef.name) + (nestedTagVarInfo.next++);
}

class CustomTag extends HtmlElement {
    constructor(el, tagDef) {
        super(el);
        this.type = 'CustomTag';
        this.tagDef = tagDef;
        // console.log(module.id, this.type);
    }

    generateCode(codegen) {
        if (this.type !== 'CustomTag') {
            throw new Error(this.type);
        }
        var builder = codegen.builder;
        var context = codegen.context;

        var tagDef = this.tagDef;

        var isNestedTag = tagDef.isNestedTag === true;
        var hasNestedTags = tagDef.hasNestedTags();
        var parentTagName;
        var isRepeated;
        var targetProperty;

        if (isNestedTag) {
            parentTagName = tagDef.parentTagName;
            isRepeated = tagDef.isRepeated === true;
            targetProperty = builder.literal(tagDef.targetProperty);
        }

        var nestedTagVar;

        if (hasNestedTags) {
            nestedTagVar = this.data.nestedTagVar = builder.identifier(getNextNestedTagVarName(tagDef, context));
        }

        let parentTagVar;

        if (isNestedTag) {
            let parentTagNode = getNestedTagParentNode(this, parentTagName);
            parentTagVar = parentTagNode.data.nestedTagVar;
        }

        var inputProps = buildInputProps(this, context);
        var renderBodyFunction;

        if (this.body && this.body.length) {

            if (tagDef.bodyFunction) {
                let bodyFunction = tagDef.bodyFunction;
                let bodyFunctionName = bodyFunction.name;
                let bodyFunctionParams = bodyFunction.params.map(function(param) {
                    return builder.identifier(param);
                });

                inputProps[bodyFunctionName] = builder.functionDeclaration(bodyFunctionName, bodyFunctionParams, this.body);
            } else {
                renderBodyFunction = context.builder.renderBodyFunction(this.body);
                if (nestedTagVar) {
                    renderBodyFunction.params.push(nestedTagVar);
                }
            }
        }


        var rendererPath = tagDef.renderer;
        var rendererRequirePath;
        var requireRendererFunctionCall;

        if (rendererPath) {
            rendererRequirePath = context.getRequirePath(rendererPath);
            requireRendererFunctionCall = builder.require(JSON.stringify(rendererRequirePath));
        } else {
            requireRendererFunctionCall = builder.literal(null);
        }

        if (tagDef.template) {
            if (renderBodyFunction) { // Store the renderBody function with the input
                inputProps.renderBody = renderBodyFunction;
            }

            let templateRequirePath = context.getRequirePath(tagDef.template);
            let templateVar = context.importTemplate(templateRequirePath);
            let renderMethod = builder.memberExpression(templateVar, builder.identifier('render'));
            let renderArgs = [ builder.literal(inputProps), 'out' ];
            let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
            return renderFunctionCall;
        } else {

            // Store the renderBody function with the input, but only if the body does not have
            // nested tags
            if (renderBodyFunction && !hasNestedTags) {
                inputProps.renderBody = renderBodyFunction;
            }

            var loadTagVar = codegen.addStaticVar('__loadTag', '__helpers.t');

            var loadTagArgs = [
                requireRendererFunctionCall // The first param is the renderer
            ];

            if (isNestedTag || hasNestedTags) {
                if (isNestedTag) {
                    loadTagArgs.push(targetProperty); // targetProperty
                    loadTagArgs.push(builder.literal(isRepeated ? 1 : 0)); // isRepeated
                } else {
                    loadTagArgs.push(builder.literal(0)); // targetProperty
                    loadTagArgs.push(builder.literal(0)); // isRepeated
                }

                if (hasNestedTags) {
                    loadTagArgs.push(builder.literal(1));
                }
            }

            var loadTag = builder.functionCall(loadTagVar, loadTagArgs);

            let tagVar = codegen.addStaticVar(tagDef.name, loadTag);
            let tagArgs = [ builder.literal(inputProps), 'out' ];

            if (isNestedTag || hasNestedTags) {
                tagArgs.push(isNestedTag ? parentTagVar : builder.literal(0));

                if (renderBodyFunction && hasNestedTags) {
                    tagArgs.push(renderBodyFunction);
                }
            }
            let tagFunctionCall = builder.functionCall(tagVar, tagArgs);
            return tagFunctionCall;
        }
    }
}

module.exports = CustomTag;