'use strict';

var HtmlElement = require('./HtmlElement');
var removeDashes = require('../util/removeDashes');
var safeVarName = require('../util/safeVarName');
var ok = require('assert').ok;
var tagLoader;

var CUSTOM_TAG_KEY = Symbol('CustomTag');

function getNestedVariables(elNode, tagDef, codegen) {
    var variableNames = [];
    if (tagDef.forEachVariable) {
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
                        if (varName.type !== 'Literal' || typeof varName.value !== 'string') {
                            codegen.addError('The value of the ' + attrName + ' is expected to be a string');
                            codegen.addError('Attribute ' + possibleNameAttributes.join(' or ') + ' is required');
                            varName = '_var';    // Let it continue with errors
                        }

                        varName = varName.value;

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
    }

    if (elNode.additionalNestedVars.length) {
        elNode.additionalNestedVars.forEach((varName) => {
            variableNames.push(codegen.builder.identifier(varName));
        });
    }

    return variableNames;
}

function getAllowedAttributesString(tagName, context) {
    var attrNames = [];

    var tagDef = context.taglibLookup.getTag(tagName);
    if (tagDef) {
        tagDef.forEachAttribute((attrDef) => {
            attrNames.push(attrDef.name);
        });

        return attrNames.length ? attrNames.join(', ') : '(none)';
    } else {
        return null;
    }
}

function checkIfNestedTagCanBeAddedDirectlyToInput(nestedTag, parentCustomTag) {
    if (!nestedTag._isDirectlyNestedTag) {
        return false;
    }

    var isRepeated = nestedTag.tagDef.isRepeated;
    if (!isRepeated) {
        return true;
    }

    let tagName = nestedTag.tagDef.name;
    let previousMatchingNestedTags = parentCustomTag._foundNestedTagsByName[tagName];
    if (!previousMatchingNestedTags) {
        return true;
    }

    for (let i=0; i<previousMatchingNestedTags.length; i++) {
        let previousNestedTag = previousMatchingNestedTags[i];
        if (!previousNestedTag._isDirectlyNestedTag) {
            return false;
        }
    }

    return true;
}

function getNextNestedTagVarName(tagDef, context) {
    var key = 'customTag' + tagDef.name;

    var nestedTagVarInfo = context.data[key] || (context.data[key] = {
        next: 0
    });


    return safeVarName(tagDef.name) + (nestedTagVarInfo.next++);
}

function getNextRenderBodyVar(context) {
    var key = 'CustomTag_renderBodyVar';
    var nextVarInfo = context.data[key] || (context.data[key] = {
        next: 0
    });

    return 'renderBodyConditional'+ (nextVarInfo.next++);
}

function processDirectlyNestedTags(node, codegen) {
    node.forEachChild((child) => {
        if (child.type === 'CustomTag') {
            let customTag = child;

            var tagDef = customTag.resolveTagDef(codegen);
            if (tagDef.isNestedTag) {
                customTag._isDirectlyNestedTag = true;
            }
        } else if (child.type === 'If') {
            if (child.nextSibling && child.nextSibling.type === 'Else') {
                return;
            }

            let ifNode = child;

            let childChild = child.childCount === 1 && child.firstChild;
            if (childChild && childChild.type === 'CustomTag') {
                let customTag = childChild;

                let tagDef = customTag.resolveTagDef(codegen);
                if (tagDef.isNestedTag && !tagDef.isRepeated) {
                    let condition = codegen.generateCode(ifNode.test);
                    customTag._isDirectlyNestedTag = true;
                    customTag._condition = condition;
                    ifNode.replaceWith(customTag);
                }
            }
        }
    });
}

class CustomTag extends HtmlElement {
    constructor(el, tagDef) {
        super(el);
        this.type = 'CustomTag';
        this.tagDef = tagDef;
        this.additionalNestedVars = [];
        this._nestedTagVar = null;
        this._inputProps = null;
        this._isDirectlyNestedTag = false;
        this._condition = null;
        this._foundNestedTagsByName = {};
        this._hasDynamicNestedTags = false;
    }

    buildInputProps(codegen) {
        var inputProps = this._inputProps;
        if (inputProps) {
            return inputProps;
        }

        var context = codegen.context;
        var tagDef = this.resolveTagDef(codegen);
        inputProps = {};

        function handleAttr(attrName, attrValue, attrDef) {
            if (!attrDef) {
                return; // Skip over attributes that are not supported
            }

            if (attrValue == null) {
                attrValue = context.builder.literalTrue();
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
                    propName = attrName;
                } else {
                    propName = removeDashes(attrName);
                }
            }

            if (attrDef.type === 'path') {
                attrValue = context.resolvePath(attrValue);
            } else if (attrDef.type === 'template') {
                attrValue = context.resolveTemplate(attrValue);
            }

            if (parentPropName) {
                let parent = inputProps[parentPropName] || (inputProps[parentPropName] = {});
                parent[propName] = attrValue;
            } else {
                inputProps[propName] = attrValue;
            }
        }

        if (tagDef.forEachAttribute) {
            // Add default values for any attributes from the tag definition. These added properties may get overridden
            // by get overridden from the attributes found on the actual HTML element.
            tagDef.forEachAttribute(function (attrDef) {
                if (attrDef.hasOwnProperty('defaultValue')) {
                    handleAttr(
                        attrDef.name,
                        context.builder.literal(attrDef.defaultValue),
                        attrDef);
                }
            });
        }

        let tagName = tagDef.isNestedTag ? tagDef.name : this.tagName;

        // Loop over the attributes found on the HTML element and add the corresponding properties
        // to the input object for the custom tag
        this.forEachAttribute((attr) => {
            var attrName = attr.name;
            var attrDef = attr.def || tagDef.getAttribute(attr.name);

            if (!attrDef) {
                var errorMessage = 'Unsupported attribute of "' + attrName + '" found on the <' + this.tagName + '> custom tag.';
                let allowedAttributesString = getAllowedAttributesString(tagName, context);
                if (allowedAttributesString) {
                    errorMessage += ' Allowed attributes: ' + allowedAttributesString;
                }

                context.addError(this,  errorMessage);
                return; // Skip over attributes that are not supported
            }

            handleAttr(attrName, attr.value, attrDef);
        });


        if (tagDef.forEachImportedVariable) {
            // Imported variables are used to add input properties to a custom tag based on data/variables
            // found in the compiled template
            tagDef.forEachImportedVariable(function(importedVariable) {
                let propName = importedVariable.targetProperty;
                let propExpression = importedVariable.expression;

                inputProps[propName] = propExpression;
            });
        }

        this._inputProps = inputProps;

        return inputProps;
    }

    resolveTagDef(codegen) {
        var context = codegen.context;
        var tagDef = this.tagDef;
        if (!tagDef) {
            if (this.tagName && this.tagName.startsWith('@')) {
                var parentCustomTag = context.getData(CUSTOM_TAG_KEY);

                if (!parentCustomTag) {
                    codegen.addError('Invalid usage of the <' + this.tagName + '> nested tag. Tag not nested within a custom tag.');
                    return null;
                }

                var parentTagDef = parentCustomTag.tagDef;
                if (!parentTagDef) {
                    throw new Error('"tagDef" is expected for CustomTag: ' + parentCustomTag.tagName);
                }

                var nestedTagName = this.tagName.substring(1);

                var fullyQualifiedName = parentCustomTag.tagDef.name + ':' + nestedTagName;
                tagDef = this.tagDef = context.getTagDef(fullyQualifiedName);
                if (!tagDef) {
                    // This nested tag is not declared, but we will allow it to go through
                    tagDef = this.tagDef = tagLoader.loadTag({
                        name: fullyQualifiedName,
                        attributes: {
                            '*': {
                                targetProperty: null
                            }
                        }
                    }, context.filename);

                    tagDef.isNestedTag = true;
                    tagDef.isRepeated = false;
                    tagDef.targetProperty = nestedTagName;
                }
            } else {
                throw new Error('"tagDef" is required for CustomTag');
            }
            this.tagDef = tagDef;
        }
        return tagDef;
    }

    addNestedVariable(name) {
        ok(name, '"name" is required');
        this.additionalNestedVars.push(name);
    }

    addNestedTag(nestedTag) {
        var tagName = nestedTag.tagDef.name;

        var byNameArray = this._foundNestedTagsByName[tagName] ||
            (this._foundNestedTagsByName[tagName] = []);

        byNameArray.push(nestedTag);
    }

    getNestedTagVar(context) {
        if (!this._nestedTagVar) {
            var tagDef = this.tagDef;
            var builder = context.builder;

            var nextNestedTagVarName = getNextNestedTagVarName(tagDef, context);

            this._nestedTagVar = builder.identifier(nextNestedTagVarName);
        }

        return this._nestedTagVar;
    }

    generateCode(codegen) {
        if (this.type !== 'CustomTag') {
            throw new Error(this.type);
        }
        var builder = codegen.builder;
        var context = codegen.context;

        var tagDef = this.resolveTagDef(codegen);

        var parentCustomTag;

        // console.log('BEGIN:', JSON.stringify(this, null, 2));

        // console.log(module.id, 'generateCode BEGIN:', this.tagName, new Error().stack);

        context.pushData(CUSTOM_TAG_KEY, this);
        processDirectlyNestedTags(this, codegen);
        var body = codegen.generateCode(this.body);
        context.popData(CUSTOM_TAG_KEY);

        // console.log(module.id, 'generateCode   END:', this.tagName);

        var isNestedTag = tagDef.isNestedTag === true;
        if (isNestedTag) {
            parentCustomTag = context.getData(CUSTOM_TAG_KEY);

            // console.log('parentCustomTag:', parentCustomTag.tagName, 'child:', tagDef.name);

            if (!parentCustomTag) {
                if (tagDef.parentTagName) {
                    codegen.addError(`Invalid usage of the <${this.tagName}> nested tag. Tag not nested within a <${tagDef.parentTagName}> tag.`);
                } else {
                    codegen.addError(`Invalid usage of the <${this.tagName}> nested tag. Tag not nested within a custom tag.`);
                }

                return null;
            }

            parentCustomTag.addNestedTag(this);

            if (checkIfNestedTagCanBeAddedDirectlyToInput(this, parentCustomTag)) {
                let inputProps = this.buildInputProps(codegen);

                if (body && body.length) {
                    inputProps.renderBody = codegen.builder.renderBodyFunction(body);
                }

                if (tagDef.isRepeated) {
                    var currentValue = parentCustomTag.getAttributeValue(tagDef.targetProperty);
                    if (currentValue) {
                        currentValue.value.push(inputProps);
                    } else {
                        parentCustomTag.setAttributeValue(tagDef.targetProperty, builder.literal([
                            inputProps
                        ]));
                    }
                } else {
                    let nestedTagValue = builder.literal(inputProps);
                    if (this._condition) {
                        nestedTagValue = builder.binaryExpression(this._condition, '&&', nestedTagValue);
                    }
                    parentCustomTag.setAttributeValue(tagDef.targetProperty, nestedTagValue);
                }

                return null;
            } else {
                this._isDirectlyNestedTag = false;
                parentCustomTag._hasDynamicNestedTags = true;
            }
        }

        var hasDynamicNestedTags = this._hasDynamicNestedTags;

        var bodyOnlyIf = this.bodyOnlyIf;
        // let parentTagVar;

        var nestedVariableNames = getNestedVariables(this, tagDef, codegen);

        var inputProps = this.buildInputProps(codegen);

        // if (isNestedTag) {
        //     isRepeated = tagDef.isRepeated === true;
        //     targetProperty = tagDef.targetProperty;
        //     parentTagVar = parentCustomTag.getNestedTagVar(context);
        // }

        var renderBodyFunction;

        if (body && body.length) {
            if (tagDef.bodyFunction) {
                let bodyFunction = tagDef.bodyFunction;
                let bodyFunctionName = bodyFunction.name;
                let bodyFunctionParams = bodyFunction.params.map(function(param) {
                    return builder.identifier(param);
                });

                inputProps[bodyFunctionName] = builder.functionDeclaration(bodyFunctionName, bodyFunctionParams, body);
            } else {
                renderBodyFunction = context.builder.renderBodyFunction(body);
                if (hasDynamicNestedTags) {
                    renderBodyFunction.params.push(this._nestedTagVar);
                } else {
                    if (nestedVariableNames && nestedVariableNames.length) {
                        renderBodyFunction.params = renderBodyFunction.params.concat(nestedVariableNames);
                    }
                }
            }
        }

        var renderBodyFunctionVarIdentifier;
        var renderBodyFunctionVar;
        // Store the renderBody function with the input, but only if the body does not have
        // nested tags
        if (renderBodyFunction) {
            if (bodyOnlyIf) {
                // Move the renderBody function into a local variable
                renderBodyFunctionVarIdentifier = builder.identifier(getNextRenderBodyVar(context));
                renderBodyFunctionVar = builder.var(renderBodyFunctionVarIdentifier, renderBodyFunction);
                inputProps.renderBody = renderBodyFunctionVarIdentifier;
            } else {
                inputProps.renderBody = renderBodyFunction;
            }
        } else {
            bodyOnlyIf = null;
        }

        inputProps = builder.literal(inputProps);

        var argument = this.argument;

        if (argument) {
            argument = builder.parseExpression(argument);

            if (Object.keys(inputProps.value).length === 0) {
                inputProps = argument;
            } else {
                var mergeVar = context.helper('merge');
                inputProps = builder.functionCall(mergeVar, [
                    inputProps, // Input props from the attributes take precedence
                    argument
                ]);
            }
        }

        if (hasDynamicNestedTags) {
            inputProps = builder.functionCall(context.helper('mergeNestedTagsHelper'), [ inputProps ]);
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

        var finalNode;

        var tagVarName = tagDef.name + (tagDef.isNestedTag ? '_nested_tag' : '_tag');

        if (tagDef.template) {
            var templateRequirePath = context.getRequirePath(tagDef.template);
            var templateVar = context.importTemplate(templateRequirePath, tagDef.name + '_template');

            let loadTag = builder.functionCall(context.helper('loadTag'), [templateVar]);
            let tagVar = codegen.addStaticVar(tagVarName, loadTag);

            let tagFunctionCall = builder.functionCall(tagVar, [ inputProps, 'out' ]);
            finalNode = tagFunctionCall;
        } else {
            if (rendererRequirePath) {
                codegen.pushMeta('tags', builder.literal(rendererRequirePath), true);
            }

            let loadTag;
            let tagArgs;

            if (isNestedTag) {
                let loadTagArgs = [ builder.literal(tagDef.targetProperty) ];

                if (tagDef.isRepeated) {
                    loadTagArgs.push(builder.literal(1)); // isRepeated
                }

                loadTag = builder.functionCall(context.helper('loadNestedTag'), loadTagArgs);

                tagArgs = [inputProps, parentCustomTag.getNestedTagVar(context) ];
            } else {
                loadTag = builder.functionCall(context.helper('loadTag'), [
                    requireRendererFunctionCall // The first param is the renderer
                ]);

                tagArgs = [inputProps, builder.identifierOut() ];
            }

            let tagVar = codegen.addStaticVar(tagVarName, loadTag);

            let tagFunctionCall = builder.functionCall(tagVar, tagArgs);
            finalNode = tagFunctionCall;
        }

        if (bodyOnlyIf && renderBodyFunctionVar) {
            var ifStatement = builder.ifStatement(
                bodyOnlyIf,
                [

                    builder.functionCall(renderBodyFunctionVarIdentifier, [builder.identifierOut()])
                ],
                builder.elseStatement([
                    finalNode
                ]));

            return [
                renderBodyFunctionVar,
                ifStatement
            ];
        } else {
            return finalNode;
        }
    }
}

module.exports = CustomTag;

tagLoader = require('../taglib-loader/loader-tag');