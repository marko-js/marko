'use strict';

var path = require('path');
var fs = require('fs');

function getFileNameNoExt(context) {
    let filename = path.basename(context.filename);
    let ext = path.extname(filename);

    if (ext === '.js') {
        return false;
    }

    if (ext) {
        filename = filename.slice(0, 0 - ext.length);
    }

    return filename;
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
        transformHelper.context.deprecate('Using <script> with an export to create a single file component will be removed in the next release candidate.  Use class instead. \nSee https://github.com/marko-js/marko/issues/547');

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
    if (styleEl.bodyText) {
        return;
    }

    var attrs = styleEl.attributes;

    var styleCode;
    var lang = 'css';

    var hasStyleBlock = false;

    for (var i=attrs.length-1; i>=0; i--) {
        var attr = attrs[i];
        var name = attr.name;
        if (name.startsWith('{')) {
            hasStyleBlock = true;

            styleCode = name.slice(1, -1);
        } else if (name === 'class') {
            if (attr.value.type !== 'Literal' || typeof attr.value.value !== 'string') {
                return;
            }

            lang = attr.value.value;
        } else {
            if (hasStyleBlock) {
                transformHelper.context.addError(styleEl, 'Unsupported attribute on the component style tag: ' + attr.name);
                return;
            }
        }
    }

    if (styleCode == null) {
        return;
    }

    var context = transformHelper.context;
    context.addDependency({
        type: lang,
        code: styleCode.trim(),
        virtualPath: './'+path.basename(context.filename)+'.'+lang,
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
        method: false,
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

            if (method.kind === 'method') {
                return methodToProperty(method);
            } else if (method.kind === 'constructor') {
                let converted = methodToProperty(method);
                converted.key.name = 'onCreate';
                return converted;
            } else {
                return method;
            }
        })
    };
}

function handleClassDeclaration(classEl, transformHelper) {
    let tree;
    var wrappedSrc = '('+classEl.tagString+'\n)';

    try {
        tree = esprima.parse(wrappedSrc);
    } catch(err) {
        var message = 'Unable to parse JavaScript for componnet class. Error: ' + err;

        if (err.index != null) {
            var errorIndex = err.index;
            // message += '\n' + err.description;
            if (errorIndex != null && errorIndex >= 0) {
                transformHelper.context.addError({
                    pos: classEl.pos + errorIndex,
                    message: message
                });
                return;
            }
        }

        transformHelper.context.addError(classEl, message);
        return;
    }
    let expression = tree.body[0].expression;

    if (expression.superClass && expression.superClass.name) {
        transformHelper.context.addError(classEl, 'A component class is not allowed to use `extends`. See: https://github.com/marko-js/marko/wiki/Error:-Component-class-with-extends');
        return;
    }

    let object = classToObject(expression);
    let componentVar = transformHelper.context.addStaticVar('marko_component', escodegen.generate(object));

    transformHelper.setHasBoundWidgetForTemplate();
    transformHelper.setInlineComponent(componentVar);
    classEl.detach();
}

module.exports = function handleRootNodes() {
    var context = this.context;
    var builder = this.builder;
    var filename = getFileNameNoExt(context);
    var isEntry = 'index' === filename;

    if(!filename) {
        return; // inline component
    }

    var filematch = '('+filename.replace(/\./g, '\\.') + '\\.' + (isEntry ? '|' : '') + ')';
    var stylematch = new RegExp('^'+filematch+'style\\.\\w+$');
    var componentmatch = new RegExp('^'+filematch+'component\\.\\w+$');
    var widgetmatch = new RegExp('^'+filematch+'widget\\.\\w+$');

    var templateRoot = this.el;

    var dirname = this.dirname;
    var hasBindTarget = false;

    fs.readdirSync(dirname).forEach(file => {
        if(stylematch.test(file)) {
            context.addDependency('./' + file);
        } else if(componentmatch.test(file) || widgetmatch.test(file)) {
            hasBindTarget = true;
            this.context.data.widgetModule = './'+file.slice(0, file.lastIndexOf('.'));
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
            var tagName = node.tagName && node.tagName.toLowerCase();

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

                    if (isEntry && tagName === 'script') {
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

    var nextKey = 0;

    rootNodes.forEach((curNode, i) => {
        curNode.setAttributeValue('_widgetbind');

        if (!curNode.hasAttribute('key') && !curNode.hasAttribute('ref')) {
            if (curNode.type === 'CustomTag' || rootNodes.length > 1) {
                curNode.setAttributeValue('key', builder.literal('_r' + (nextKey++)));
            }
        }
    });
};
