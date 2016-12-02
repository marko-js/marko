'use strict';

var resolveFrom = require('resolve-from');
var path = require('path');

function isTemplateMainEntry(context) {
    let filename = path.basename(context.filename);
    let ext = path.extname(filename);

    if (ext === '.js') {
        return false;
    }

    if (ext) {
        filename = filename.slice(0, 0 - ext.length);
    }

    return filename === 'index';
}

const esprima = require('esprima');
const estraverse = require('estraverse');
const escodegen = require('escodegen');

function isModuleExports(node) {
    return node.type === 'AssignmentExpression' &&
           node.operator === '=' &&
           node.left.type === 'MemberExpression' &&
           node.left.object.type === 'Identifier' &&
           node.left.object.name === 'module' &&
           node.left.property.type === 'Identifier' &&
           node.left.property.name === 'exports';
}

function handleScriptElement(scriptEl, transformHelper) {
    let builder = transformHelper.builder;

    let hasExport = false;

    var scriptCode = scriptEl.bodyText;

    let tree = esprima.parse(scriptCode, { sourceType:'module' });
    let updatedTree = estraverse.replace(tree, {
        enter: function(node) {
            if(isModuleExports(node)) {
                hasExport = true;
                node.left = {
                    type: 'Identifier',
                    name: 'marko_component'
                };
                this.break();
            } else if (node.type === 'ExportDefaultDeclaration') {
                hasExport = true;
                return {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'AssignmentExpression',
                        operator: '=',
                        left: {
                            type: 'Identifier',
                            name: 'marko_component'
                        },
                        right: node.declaration
                    }
                };
            }
        }
    });

    if (hasExport) {
        scriptEl.detach();
        var inlineComponent = builder.selfInvokingFunction([
            builder.var('marko_component'),
            builder.code(
                escodegen.generate(updatedTree)
            ),
            builder.returnStatement('marko_component')
        ]);

        transformHelper.setInlineComponent(inlineComponent);
    }
}

module.exports = function handleRootNodes() {
    var context = this.context;
    var builder = this.builder;

    if (!isTemplateMainEntry(context)) {
        // We only support implicit binds in `index.marko`
        return;
    }

    var templateRoot = this.el;

    var dirname = this.dirname;
    var hasBindTarget = false;

    if (resolveFrom(dirname, './component')) {
        hasBindTarget = true;
    } else if (resolveFrom(dirname, './widget')) {
        hasBindTarget = true;
    }

    var rootNodes = [];
    var hasExplicitBind = false;
    var hasIdCount = 0;
    var nodeWithAssignedId;
    var assignedId;
    var transformHelper = this;

    let walker = context.createWalker({
        enter(node) {
            if (node.type === 'HtmlElement') {
                if (node.hasAttribute('w-bind')) {
                    hasExplicitBind = true;
                } else {
                    if (node.hasAttribute('id')) {
                        hasIdCount++;
                        nodeWithAssignedId = node;
                        assignedId = node.getAttributeValue('id');
                    }

                    var tagName = node.tagName && node.tagName.toLowerCase();

                    if (tagName === 'script') {
                        handleScriptElement(node, transformHelper);
                    } else if (tagName !== 'style') {
                        rootNodes.push(node);
                    }
                }
                walker.skip();

                return;
            } else if (node.type === 'CustomTag') {
                rootNodes.push(node);
                walker.skip();
                return;
            }
        }
    });

    walker.walk(templateRoot);

    if (this.hasInlineComponent()) {
        hasBindTarget = true;
    }

    if (hasExplicitBind) {
        //There is an explicit bind so nothing to do
        return;
    }

    if (rootNodes.length === 0) {
        return;
    }

    if (rootNodes.length > 1 && hasIdCount > 0) {
        // We can only bind a widget to multiple top-level elements if we can assign
        // all of the IDs
        return;
    }

    let widgetNode = context.createNodeForEl('_widget');

    context.root.moveChildrenTo(widgetNode);
    context.root.appendChild(widgetNode);

    var nextRef = 0;

    rootNodes.forEach((curNode, i) => {
        curNode.setAttributeValue('w-bind');
        curNode.data.widgetNode = widgetNode;

        if (rootNodes.length > 1 && !curNode.hasAttribute('ref')) {
            curNode.setAttributeValue('ref', builder.literal('_r' + (nextRef++)));
        }
    });
};