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

function getNestedVariables(elNode, tagDef, codegen) {
    var variableNames = [];
    tagDef.forEachVariable((nestedVar) => {
        var varName;
        if (nestedVar.nameFromAttribute) {
            var possibleNameAttributes = nestedVar.nameFromAttribute.split(/\s+or\s+|\s*,\s*/i);
            for (var i = 0, len = possibleNameAttributes.length; i < len; i++) {
                var attrName = possibleNameAttributes[i];
                var keep = false;
                if (attrName.endsWith('|keep')) {
                    keep = true;
                    attrName = attrName.slice(0, 0 - '|keep'.length);
                    possibleNameAttributes[i] = attrName;
                }
                varName = elNode.getAttributeValue(attrName);
                if (varName) {
                    if (!keep) {
                        elNode.removeAttribute(attrName);
                    }
                    break;
                }
            }
            if (!varName) {
                codegen.addError('Attribute ' + possibleNameAttributes.join(' or ') + ' is required');
                varName = '_var';    // Let it continue with errors
            }
        } else {
            varName = nestedVar.name;
            if (!varName) {
                codegen.addError('Variable name is required');
                varName = '_var';    // Let it continue with errors
            }
        }
        variableNames.push(codegen.builder.identifier(varName));
    });

    return variableNames;
}

function buildInputProps(el, context) {
    var tagDef = el.tagDef;
    var inputProps = {};

    el.forEachAttribute((attr) => {
        var attrName = attr.name;

        var attrDef = attr.def || context.taglibLookup.getAttribute(el.tagName, attr.name);
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
            if (attrDef.removeDashes === true || attrDef.preserveName === false) {
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
            } else if (attrDef.preserveName === true) {
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
            if (!parentTagNode) {
                codegen.addError('Invalid usage of the <' + this.tagName + '> nested tag. Tag not nested within a <' + parentTagName + '> tag.');
                return;
            }
            parentTagVar = parentTagNode.data.nestedTagVar;
        }

        var nestedVariableNames = getNestedVariables(this, tagDef, codegen);

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
                } else {
                    if (nestedVariableNames && nestedVariableNames.length) {
                        renderBodyFunction.params = renderBodyFunction.params.concat(nestedVariableNames);
                    }
                }
            }
        }

        // Store the renderBody function with the input, but only if the body does not have
        // nested tags
        if (renderBodyFunction && !hasNestedTags) {
            inputProps.renderBody = renderBodyFunction;
        }

        inputProps = builder.literal(inputProps);

        var argument = this.argument;

        if (argument) {
            argument = builder.parseExpression(argument);

            if (Object.keys(inputProps.value).length === 0) {
                inputProps = argument;
            } else {
                var mergeVar = codegen.addStaticVar('__merge', '__helpers.m');
                inputProps = builder.functionCall(mergeVar, [
                    inputProps, // Input props from the attributes take precedence
                    argument
                ]);
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
            let templateRequirePath = context.getRequirePath(tagDef.template);
            let templateVar = context.importTemplate(templateRequirePath);
            let renderMethod = builder.memberExpression(templateVar, builder.identifier('render'));
            let renderArgs = [ inputProps, 'out' ];
            let renderFunctionCall = builder.functionCall(renderMethod, renderArgs);
            return renderFunctionCall;
        } else {
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
            let tagArgs = [inputProps, 'out' ];

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