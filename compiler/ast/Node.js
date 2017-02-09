'use strict';
var Container = require('./Container');
var ArrayContainer = require('./ArrayContainer');
var ok = require('assert').ok;
var extend = require('raptor-util/extend');
var inspect = require('util').inspect;
var EventEmitter = require('events').EventEmitter;

function trim(textNode) {
    if (textNode.preserveWhitespace === true) {
        return;
    }

    var text = textNode.argument.value;
    var isFirst = textNode.isFirst;
    var isLast = textNode.isLast;

    if (isFirst) {
        //First child
        text = text.replace(/^\r?\n\s*/g, '');
    }
    if (isLast) {
        //Last child
        text = text.replace(/\r?\n\s*$/g, '');
    }
    if (/^\r?\n\s*$/.test(text)) {
        //Whitespace between elements
        text = '';
    }
    text = text.replace(/\s+/g, ' ');
    textNode.argument.value = text;
}

class Node {
    constructor(type) {
        this.type = type;
        this.statement = false;
        this.container = null;
        this.pos = null; // The character index of the node in the original source file
        this.tagDef = null; // The tag definition associated with this Node
        this._codeGeneratorFuncs = null;
        this._flags = {};
        this._transformersApplied = {};
        this._preserveWhitespace = null;
        this._events = null;
        this._childTextNormalized = undefined;
        this.data = {};
        this._finalNode = false;
        this._trimStartEnd = false;
    }

    on(event, listener) {
        if (!this._events) {
            this._events = new EventEmitter();
        }

        this._events.on(event, listener);
    }

    emit(event, args) {
        if (this._events) {
            this._events.emit.apply(this._events, arguments);
        }
    }

    listenerCount(event) {
        if (this._events) {
            return this._events.listenerCount(event);
        } else {
            return 0;
        }
    }

    onBeforeGenerateCode(listener) {
        this.on('beforeGenerateCode', listener);
    }

    onAfterGenerateCode(listener) {
        this.on('afterGenerateCode', listener);
    }

    wrapWith(wrapperNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        var replaced = this.container.replaceChild(wrapperNode, this);
        ok(replaced, 'Invalid state. Child does not belong to the container');
        wrapperNode.appendChild(this);
    }

    replaceWith(newNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        var replaced = this.container.replaceChild(newNode, this);
        ok(replaced, 'Invalid state. Child does not belong to the container');
    }

    insertSiblingBefore(newNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        this.container.insertChildBefore(newNode, this);
    }

    insertSiblingAfter(newNode) {
        ok(this.container, 'Node does not belong to a container: ' + this);
        this.container.insertChildAfter(newNode, this);
    }

    /**
     * Converts the provided `array` into a `ArrayContainer`. If the provided `array` is already an instance of a `Container` then it is simply returned.
     * @param  {[type]} array [description]
     * @return {[type]}       [description]
     */
    makeContainer(array) {
        if (array instanceof Container) {
            return array;
        }

        return new ArrayContainer(this, array);
    }

    prependChild(node) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        this.body.prependChild(node);
    }

    appendChild(node) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        this.body.appendChild(node);
    }

    insertBefore(newNode, referenceNode) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        this.body.insertBefore(newNode, referenceNode);
    }

    forEachChild(callback, thisObj) {
        if (this.body) {
            this.body.forEach(callback, thisObj);
        }
    }

    moveChildrenTo(targetNode) {
        ok(this.body, 'Node does not support child nodes: ' + this);
        ok(this !== targetNode, 'Target node cannot be the same as the source node');

        this.body.moveChildrenTo(targetNode);
    }

    forEachNextSibling(callback, thisObj) {
        var container = this.container;

        if (container) {
            container.forEachNextSibling(this, callback, thisObj);
        }
    }

    get firstChild() {
        var body = this.body;
        return body && body.firstChild;
    }

    get previousSibling() {
        var container = this.container;

        if (container) {
            return container.getPreviousSibling(this);
        }
    }

    get nextSibling() {
        var container = this.container;

        if (container) {
            return container.getNextSibling(this);
        }
    }

    isTransformerApplied(transformer) {
        return this._transformersApplied[transformer.id] === true;
    }

    setTransformerApplied(transformer) {
        this._transformersApplied[transformer.id] = true;
    }

    toString() {
        return inspect(this);
    }

    toJSON() {
        let result = extend({}, this);
        delete result.container;
        delete result.statement;
        delete result.pos;
        delete result._transformersApplied;
        delete result._codeGeneratorFuncs;
        delete result._flags;
        delete result.data;
        delete result.tagDef;
        delete result._preserveWhitespace;
        delete result._events;
        delete result._finalNode;
        delete result._trimStartEnd;
        delete result._childTextNormalized;
        return result;
    }

    detach() {
        if (this.container) {
            this.container.removeChild(this);
            this.container = null;
        }
    }

    /**
     * Returns true if the current node represents a compound expression (e.g. )
     * @return {Boolean} [description]
     */
    isCompoundExpression() {
        return false;
    }

    isDetached() {
        return this.container == null;
    }

    /**
     * Used by the Node.js require('util').inspect function.
     * We default to inspecting on the simplified version
     * of this node that is the same version we use when
     * serializing to JSON.
     */
    inspect(depth, opts) {
        // We inspect in the simplified version of this object t
        return this.toJSON();
    }

    setType(newType) {
        this.type = newType;
    }

    setCodeGenerator(mode, codeGeneratorFunc) {
        if (arguments.length === 1) {
            codeGeneratorFunc = arguments[0];
            mode = null;
        }

        if (!this._codeGeneratorFuncs) {
            this._codeGeneratorFuncs = {};
        }
        this._codeGeneratorFuncs[mode || 'DEFAULT'] = codeGeneratorFunc;
    }

    getCodeGenerator(mode) {
        if (this._codeGeneratorFuncs) {
            return this._codeGeneratorFuncs[mode] || this._codeGeneratorFuncs.DEFAULT;
        } else {
            return undefined;
        }
    }

    setFlag(name) {
        this._flags[name] = true;
    }

    clearFlag(name) {
        delete this._flags[name];
    }

    isFlagSet(name) {
        return this._flags.hasOwnProperty(name);
    }

    get bodyText() {
        var bodyText = '';

        this.forEachChild((child) => {
            if (child.type === 'Text') {
                var childText = child.argument;
                if (childText && childText.type === 'Literal') {
                    bodyText += childText.value;
                }
            }
        });

        return bodyText;
    }

    get parentNode() {
        return this.container && this.container.node;
    }

    setPreserveWhitespace(isPreserved) {
        this._preserveWhitespace = isPreserved;
    }

    isPreserveWhitespace() {
        var preserveWhitespace = this._preserveWhitespace;
        if (preserveWhitespace == null) {
            preserveWhitespace = this.tagDef && this.tagDef.preserveWhitespace;
        }

        return preserveWhitespace === true;
    }

    setFinalNode(isFinal) {
        this._finalNode = true;
    }

    setTrimStartEnd(trimStartEnd) {
        this._trimStartEnd = trimStartEnd;
    }

    _normalizeChildTextNodes(context, forceTrim) {
        if (this._childTextNormalized) {
            return;
        }

        this._childTextNormalized = true;

        var trimStartEnd = this._trimStartEnd === true;

        var isPreserveWhitespace = false;

        if (!forceTrim) {
            if (context.isPreserveWhitespace() || this.preserveWhitespace === true || this.isPreserveWhitespace()) {
                isPreserveWhitespace = true;
            }
        }


        if (isPreserveWhitespace && trimStartEnd !== true) {
            return;
        }

        var body = this.body;
        if (!body) {
            return;
        }

        var isFirst = true;

        var currentTextLiteral = null;
        var literalTextNodes = [];

        body.forEach((curChild, i) => {
            if (curChild.noOutput) {
                // Skip over AST nodes that produce no HTML output
                return;
            }

            if (curChild.type === 'Text' && curChild.isLiteral()) {
                curChild.isFirst  = null;
                curChild.isLast  = null;

                if (currentTextLiteral &&
                        currentTextLiteral.preserveWhitespace === curChild.preserveWhitespace &&
                        currentTextLiteral.escape === curChild.escape) {
                    currentTextLiteral.argument.value += curChild.argument.value;
                    curChild.detach();
                } else {
                    currentTextLiteral = curChild;
                    literalTextNodes.push(currentTextLiteral);
                    if (isFirst) {
                        currentTextLiteral.isFirst = true;
                    }
                }
            } else {
                currentTextLiteral = null;
            }

            isFirst = false;
        });

        if (currentTextLiteral) {
            // Last child text
            currentTextLiteral.isLast = true;
        }

        if (trimStartEnd) {
            if (literalTextNodes.length) {
                // We will only trim the first and last nodes
                var firstTextNode = literalTextNodes[0];
                var lastTextNode = literalTextNodes[literalTextNodes.length - 1];

                if (firstTextNode.isFirst) {
                    firstTextNode.argument.value = firstTextNode.argument.value.replace(/^\s*/, '');
                }

                if (lastTextNode.isLast) {
                    lastTextNode.argument.value = lastTextNode.argument.value.replace(/\s*$/, '');
                }
            }
        }

        if (!isPreserveWhitespace) {
            literalTextNodes.forEach(trim);
        }

        literalTextNodes.forEach((textNode) => {
            if (textNode.argument.value === '') {
                textNode.detach();
            }
        });
    }

    get childCount() {
        ok(this.body, 'Node does not support child nodes: ' + this);
        return this.body.length;
    }
}

module.exports = Node;
