'use strict';

var resolveFrom = require('resolve-from');
var path = require('path');
var fs = require('fs');

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

function isModuleExportsStatement(node) {
    return node.type === 'ExpressionStatement' &&
           isModuleExports(node.expression);
}

function handleScriptElement(scriptEl, transformHelper) {
    let builder = transformHelper.builder;

    let hasExport = false;
    let needsComponentVar;

    var scriptCode = scriptEl.bodyText;

    let tree = esprima.parse(scriptCode, { sourceType:'module' });
    let updatedTree = estraverse.replace(tree, {
        enter: function(node) {
            if (isModuleExports(node)) {
                hasExport = true;
                needsComponentVar = true;
                node.left = {
                    type: 'Identifier',
                    name: 'marko_component'
                };
                this.break();
            } else if (isModuleExportsStatement(node)) {
                hasExport = true;
                return createComponentDeclaration(node.expression.right);
            } else if (node.type === 'ExportDefaultDeclaration') {
                hasExport = true;
                return createComponentDeclaration(node.declaration);
            }
        }
    });

    function createComponentDeclaration(value) {
        return {
            type: 'VariableDeclaration',
            declarations: [
                {
                    type: 'VariableDeclarator',
                    id: {
                        type: 'Identifier',
                        name: 'marko_component'
                    },
                    init: value
                }
            ],
            kind: 'var'
        };
    }

    if (hasExport) {
        let componentVar;

        if (needsComponentVar) {
            componentVar = transformHelper.context.addStaticVar('marko_component');
        } else {
            componentVar = builder.identifier('marko_component');
        }

        transformHelper.setHasBoundWidgetForTemplate();
        transformHelper.setInlineComponent(componentVar);
        transformHelper.context.addStaticCode(escodegen.generate(updatedTree));
        scriptEl.detach();
    }
}

function handleStyleElement(styleEl, transformHelper) {
    var styleCode = styleEl.bodyText;
    var langAttr = styleEl.getAttribute('lang');
    var lang = langAttr ? langAttr.value.value : 'css';
    var context = transformHelper.context;
    context.addDependency({
        type:lang,
        code:styleCode,
        virtualPath:'./'+path.basename(context.filename)+'.'+lang,
        path: './'+path.basename(context.filename)
    });
    styleEl.detach();
}

function methodToProperty(method) {
    return {
        type: 'Property',
        key: method.key,
        computed: false,
        value: method.value,
        kind: 'init',
        method: true,
        shorthand: false
    };
}

function classToObject(cls, transformHelper) {
    return {
        type: 'ObjectExpression',
        properties: cls.body.body.map((method) => {
            if(method.type != 'MethodDefinition') {
                throw Error('Only methods are allowed on single file component class definitions.');
            }
            return methodToProperty(method);
        })
    };
}

function handleClassDeclaration(classEl, transformHelper) {
    if(!/^class\s*\{/.test(classEl.tagString)) return;

    let tree = esprima.parse('('+classEl.tagString+')');
    let expression = tree.body[0].expression;
    let object = classToObject(expression);
    let componentVar = transformHelper.context.addStaticVar('marko_component', escodegen.generate(object));

    transformHelper.setHasBoundWidgetForTemplate();
    transformHelper.setInlineComponent(componentVar);
    classEl.detach()
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

    fs.readdirSync(dirname).forEach(file => {
        if(/^style\.\w+$/.test(file)) {
            context.addDependency('./' + file);
        }
    });

    var rootNodes = [];
    var hasExplicitBind = false;
    var hasIdCount = 0;
    var nodeWithAssignedId;
    var assignedId;
    var transformHelper = this;

    let walker = context.createWalker({
        enter(node) {
            if (node.type === 'TemplateRoot' || !node.type) {
                // Don't worry about the TemplateRoot or an Container node
            } else if (node.type === 'HtmlElement') {
                if (node.hasAttribute('w-bind')) {
                    transformHelper.setHasBoundWidgetForTemplate();
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
                    } else if (tagName === 'style') {
                        handleStyleElement(node, transformHelper);
                    } else {
                        rootNodes.push(node);
                    }
                }
                walker.skip();

                return;
            } else if (node.type === 'CustomTag') {
                rootNodes.push(node);

                walker.skip();
                return;
            } else {
                var tagName = node.tagName && node.tagName.toLowerCase();

                if (tagName === 'class') {
                    handleClassDeclaration(node, transformHelper);
                }

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

    if (!hasBindTarget) {
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

    transformHelper.setHasBoundWidgetForTemplate();

    var nextRef = 0;

    rootNodes.forEach((curNode, i) => {
        curNode.setAttributeValue('_widgetbind');

        if (!curNode.hasAttribute('ref')) {
            if (curNode.type === 'CustomTag' || rootNodes.length > 1) {
                curNode.setAttributeValue('ref', builder.literal('_r' + (nextRef++)));
            }
        }
    });
};