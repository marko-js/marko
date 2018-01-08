'use strict';

const HtmlElement = require('./HtmlElement');
const removeDashes = require('../util/removeDashes');
const safeVarName = require('../util/safeVarName');
const ok = require('assert').ok;
const Node = require('./Node');

const CUSTOM_TAG_KEY = Symbol('CustomTag');
const HAS_RENDER_BODY_PROP_ADDED = Symbol();

function getNestedVariables(elNode, tagDef, codegen) {
    let variableNames = [];
    if (tagDef.forEachVariable) {
        tagDef.forEachVariable((nestedVar) => {
            let varName;
            if (nestedVar.nameFromAttribute) {
                let possibleNameAttributes = nestedVar.nameFromAttribute.split(/\s+or\s+|\s*,\s*/i);
                for (let i = 0, len = possibleNameAttributes.length; i < len; i++) {
                    let attrName = possibleNameAttributes[i];
                    let keep = false;
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
    let attrNames = [];

    let tagDef = context.taglibLookup.getTag(tagName);
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

    let isRepeated = nestedTag.tagDef.isRepeated;
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
    let key = 'customTag' + tagDef.name;

    let nestedTagVarInfo = context.data[key] || (context.data[key] = {
        next: 0
    });


    return safeVarName(tagDef.name) + (nestedTagVarInfo.next++);
}

function getNextRenderBodyVar(context) {
    let key = 'CustomTag_renderBodyVar';
    let nextVarInfo = context.data[key] || (context.data[key] = {
        next: 0
    });

    return 'renderBodyConditional'+ (nextVarInfo.next++);
}

function processDirectlyNestedTags(node, codegen) {
    node.forEachChild((child) => {
        if (child.type === 'CustomTag') {
            let customTag = child;

            let tagDef = customTag.resolveTagDef(codegen);
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

function merge(props1, props2, context) {
    if (props1 && !(props1 instanceof Node)) {
        props1 = context.builder.objectExpression(props1);
    }

    if (props2) {
        if (!(props2 instanceof Node)) {
            props2 = context.builder.objectExpression(props2);
        }
    } else {
        return props1;
    }

    if (props2.type === 'ObjectExpression' && !props2.hasProperties()) {
        return props1;
    }

    if (props1.type === 'ObjectExpression') {
        let argProp = props1.getProperty('_arg');

        if (argProp) {
            let mergeVar = context.helper('merge');
            argProp.value = context.builder.functionCall(mergeVar, [
                props2, // Input props from the attributes take precedence
                argProp.value
            ]);

            return props1;
        }

        if (props2.type === 'ObjectExpression') {
            props1.addProperties(props2.properties);
            return props1;
        } else {
            let mergeVar = context.helper('merge');

            return context.builder.functionCall(mergeVar, [
                props2, // Input props from the attributes take precedence
                props1
            ]);
        }
    } else {
        let mergeVar = context.helper('merge');
        return context.builder.functionCall(mergeVar, [
            props2, // Input props from the attributes take precedence
            props1
        ]);
    }
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
        this._additionalProps = null;
        this._rendererPath = null;
        this.dynamicAttributes = undefined;
    }

    buildInputProps(codegen) {
        let inputProps = this._inputProps;
        if (inputProps) {
            return inputProps;
        }

        let context = codegen.context;
        let tagDef = this.resolveTagDef(codegen);
        inputProps = {};

        function handleAttr(attrName, attrValue, attrDef) {
            if (!attrDef) {
                return; // Skip over attributes that are not supported
            }

            if (attrValue == null) {
                attrValue = context.builder.literalTrue();
            }

            let propName;
            let parentPropName;

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
                    if (Array.isArray(propName)) {
                        let propChain = propName;
                        if (propChain.length === 1) {
                            propName = propChain[0];
                        } else if (propChain.length === 2) {
                            parentPropName = propChain[0];
                            propName = propChain[1];
                        } else {
                            throw new Error('Invalid "target-property". Expected array with two elements in the following form: ["PARENT_PROPERTY_NAME", "CHILD_PROPERTY_NAME"]');
                        }
                    }
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
            let attrName = attr.name;
            if (!attrName) {
                return; // Skip attributes with no names
            }

            if (typeof attrName !== 'string') {
                // Skip over attributes that don't have string attribute names
                // since those will be computed properties that we need to
                // add at the end
                return;
            }

            let attrDef = attr.def || context.taglibLookup.getAttribute(tagName, attrName) || tagDef.getAttribute(attr.name);

            if (!attrDef) {
                let errorMessage = 'Unsupported attribute of "' + attrName + '" found on the <' + this.tagName + '> custom tag.';
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
        let context = codegen.context;
        let tagDef = this.tagDef;
        if (!tagDef) {
            if (this.tagName && this.tagName.startsWith('@')) {
                let parentCustomTag = context.getData(CUSTOM_TAG_KEY);

                if (!parentCustomTag) {
                    codegen.addError('Invalid usage of the <' + this.tagName + '> nested tag. Tag not nested within a custom tag.');
                    return null;
                }

                let parentTagDef = parentCustomTag.tagDef;
                if (!parentTagDef) {
                    throw new Error('"tagDef" is expected for CustomTag: ' + parentCustomTag.tagName);
                }

                let nestedTagName = this.tagName.substring(1);

                let fullyQualifiedName = parentCustomTag.tagDef.name + ':' + nestedTagName;
                tagDef = this.tagDef = context.getTagDef(fullyQualifiedName);
                if (!tagDef) {
                    // This nested tag is not declared, but we will allow it to go through
                    let taglibLoader = require('../taglib-loader');
                    tagDef = this.tagDef = taglibLoader.loadTag({
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
                    tagDef.parentCustomTag = parentCustomTag;
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
        let tagName = nestedTag.tagDef.name;

        let byNameArray = this._foundNestedTagsByName[tagName] ||
            (this._foundNestedTagsByName[tagName] = []);

        byNameArray.push(nestedTag);
    }

    addProps(additionalProps) {
        if (!this._additionalProps) {
            this._additionalProps = {};
        }

        Object.assign(this._additionalProps, additionalProps);
    }

    hasProp(name) {
        return this._additionalProps && this._additionalProps.hasOwnProperty(name);
    }

    addProp(name, value) {
        if (!this._additionalProps) {
            this._additionalProps = {};
        }
        this._additionalProps[name] = value;
    }

    setRendererPath(path) {
        ok(typeof path === 'string', '"path" should be a string');
        this._rendererPath = path;
    }

    getNestedTagVar(context) {
        if (!this._nestedTagVar) {
            let tagDef = this.tagDef;
            let builder = context.builder;

            let nextNestedTagVarName = getNextNestedTagVarName(tagDef, context);

            this._nestedTagVar = builder.identifier(nextNestedTagVarName);
        }

        return this._nestedTagVar;
    }

    generateRenderTagCode(codegen, tagVar, tagArgs) {
        return codegen.builder.functionCall(tagVar, tagArgs);
    }

    generateCode(codegen) {
        if (this.type !== 'CustomTag') {
            throw new Error(this.type);
        }
        let builder = codegen.builder;
        let context = codegen.context;

        let tagDef = this.resolveTagDef(codegen);

        if (!tagDef) {
            // The tag def was not able to be resolved and an error should have already
            // been added to the context
            return null;
        }

        let parentCustomTag;

        context.pushData(CUSTOM_TAG_KEY, this);
        processDirectlyNestedTags(this, codegen);
        let body = codegen.generateCode(this.body);
        context.popData(CUSTOM_TAG_KEY);

        let hasBody = body && body.length;

        let isNestedTag = tagDef.isNestedTag === true;
        if (isNestedTag) {
            parentCustomTag = context.getData(CUSTOM_TAG_KEY);
            if (!parentCustomTag) {
                if (tagDef.parentTagName) {
                    codegen.addError(`Invalid usage of the <${this.tagName}> nested tag. Tag not nested within a <${tagDef.parentTagName}> tag.`);
                } else {
                    codegen.addError(`Invalid usage of the <${this.tagName}> nested tag. Tag not nested within a custom tag.`);
                }

                return null;
            }

            parentCustomTag.addNestedTag(this);

            if (hasBody && context.isServerTarget() && !parentCustomTag.isFlagSet(HAS_RENDER_BODY_PROP_ADDED)) {
                parentCustomTag.setFlag(HAS_RENDER_BODY_PROP_ADDED);

                let hasRenderBodyKey = context.addStaticVar(
                    'hasRenderBodyKey',
                    builder.functionCall(
                        builder.memberExpression(
                            builder.identifier('Symbol'),
                            builder.identifier('for')
                        ),
                        [
                            builder.literal('hasRenderBody')
                        ]));

                // We flag tags that have a `renderBody` function on the input
                // since those tags must be handled differently if it happens to
                // be a top-level UI component since the `input` would not
                // be serializable (functions are not serializable). If know
                // that a top-level UI component has non-serializable input
                // then we won't use it as the browser-side re-render root
                parentCustomTag.setAttributeValue(hasRenderBodyKey, codegen.builder.literal(true));
            }

            if (checkIfNestedTagCanBeAddedDirectlyToInput(this, parentCustomTag)) {
                let inputProps = this.buildInputProps(codegen);

                if (hasBody) {
                    inputProps.renderBody = codegen.builder.renderBodyFunction(body);
                }

                if (tagDef.isRepeated) {
                    let currentValue = parentCustomTag.getAttributeValue(tagDef.targetProperty);
                    if (currentValue) {
                        currentValue.value.push(inputProps);
                    } else {
                        parentCustomTag.setAttributeValue(tagDef.targetProperty, builder.literal([
                            inputProps
                        ]));
                    }
                } else {
                    let nestedTagValue = builder.objectExpression(inputProps);
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

        let hasDynamicNestedTags = this._hasDynamicNestedTags;

        let bodyOnlyIf = this.bodyOnlyIf;
        // let parentTagVar;

        let nestedVariableNames = getNestedVariables(this, tagDef, codegen);

        let inputProps = this.buildInputProps(codegen);

        let renderBodyFunction;

        if (hasBody) {
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

        let renderBodyFunctionVarIdentifier;
        let renderBodyFunctionVar;
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

        // Convert the input properties object into an ObjectExpression AST node
        inputProps = builder.objectExpression(inputProps);

        // Loop over the attributes found on the HTML element and add the corresponding properties
        // to the input object for the custom tag
        this.forEachAttribute((attr) => {
            let attrName = attr.name;
            if (attrName && typeof attrName !== 'string') {
                // Add a computed property since the attribute name is not
                // a literal string.
                inputProps.properties.push(builder.property(attrName, attr.value, true /* computed */));
            }
        });

        let argExpression;

        if (this.argument) {
            argExpression = builder.parseExpression(this.argument);
        }

        let additionalProps = this._additionalProps;

        if (additionalProps) {
            inputProps = merge(additionalProps, inputProps, context);
        }

        if (argExpression) {
            inputProps = merge(argExpression, inputProps, context);
        }

        if (this.dynamicAttributes) {
            this.dynamicAttributes.forEach((dynamicAttributesExpression) => {
                inputProps = merge(dynamicAttributesExpression, inputProps, context);
            });
        }

        if (hasDynamicNestedTags) {
            inputProps = builder.functionCall(context.helper('mergeNestedTagsHelper'), [ inputProps ]);
        }

        let rendererPath = this._rendererPath || tagDef.renderer;
        let rendererRequirePath;
        let requireRendererFunctionCall;

        if (rendererPath) {
            rendererRequirePath = context.getRequirePath(rendererPath);
            requireRendererFunctionCall = builder.require(JSON.stringify(rendererRequirePath));
        } else {
            requireRendererFunctionCall = builder.literal(null);
        }

        let finalNode;

        let tagVarName = tagDef.name + (tagDef.isNestedTag ? '_nested_tag' : '_tag');

        if (tagDef.template) {
            let templateRequirePath = context.getRequirePath(tagDef.template);
            let templateVar = context.importTemplate(templateRequirePath, tagDef.name + '_template');

            let loadTag = builder.functionCall(context.helper('loadTag'), [templateVar]);
            let tagVar = codegen.addStaticVar(tagVarName, loadTag);

            finalNode = this.generateRenderTagCode(codegen, tagVar, [ inputProps, builder.identifierOut() ]);
        } else {
            if (rendererRequirePath) {
                codegen.pushMeta('tags', rendererRequirePath, true);
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

            if (isNestedTag) {
                finalNode = builder.functionCall(tagVar, tagArgs);
            } else {
                finalNode = this.generateRenderTagCode(codegen, tagVar, tagArgs);
            }
        }

        if (bodyOnlyIf && renderBodyFunctionVar) {
            let ifStatement = builder.ifStatement(
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

    addDynamicAttributes(expression) {
        if (!this.dynamicAttributes) {
            this.dynamicAttributes = [];
        }

        this.dynamicAttributes.push(expression);
    }
}

module.exports = CustomTag;
