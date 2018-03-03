'use strict';
var EventEmitter = require('events-light');
var StringWriter = require('./StringWriter');
var BufferedWriter = require('./BufferedWriter');
var defaultDocument = typeof document != 'undefined' && document;
var RenderResult = require('../RenderResult');
var attrsHelper = require('./helper-attrs');
var escapeXml = require('./escape').escapeXml;

var voidWriter = { write:function(){} };

function State(root, stream, writer, events) {
    this.root = root;
    this.stream = stream;
    this.writer = writer;
    this.events = events;

    this.finished = false;
}

function AsyncStream(global, writer, parentOut, shouldBuffer) {

    if (parentOut === null) {
        throw new Error('illegal state');
    }
    var finalGlobal = this.attributes = global || {};
    var originalStream;
    var state;

    if (parentOut) {
        state = parentOut._state;
        originalStream = state.stream;
    } else {
        var events = finalGlobal.events /* deprecated */ = writer && writer.on ? writer : new EventEmitter();

        if (writer) {
            originalStream = writer;
            if (shouldBuffer) {
                writer = new BufferedWriter(writer);
            }
        } else {
            writer = originalStream = new StringWriter();
        }

        state = new State(this, originalStream, writer, events);
    }

    this.global = finalGlobal;
    this.stream = originalStream;
    this._state = state;

    this._ended = false;
    this._remaining = 1;
    this._lastCount = 0;
    this._last = undefined; // Array
    this._parentOut = parentOut;

    this.data = {};
    this.writer = writer;
    writer.stream = this;

    this._sync = false;
    this._stack = undefined;
    this.name = undefined;
    this._timeoutId = undefined;

    this._node = undefined;

    this._elStack = undefined; // Array

    this.___components = null; // ComponentsContext

    this.___assignedComponentDef = null;
    this.___assignedKey = null;
    this.___assignedCustomEvents = null;
}

AsyncStream.DEFAULT_TIMEOUT = 10000;

/**
* If set to `true`, AsyncStream errors will include the full stack trace
*/
AsyncStream.INCLUDE_STACK =
    typeof process !== 'undefined' &&
    (!process.env.NODE_ENV ||
        process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'dev');

AsyncStream.enableAsyncStackTrace = function() {
    AsyncStream.INCLUDE_STACK = true;
};

var proto = AsyncStream.prototype = {
    constructor: AsyncStream,
    ___document: defaultDocument,
    ___isOut: true,

    sync: function() {
        this._sync = true;
    },

    isSync: function() {
        return this._sync === true;
    },

    write: function(str) {
        if (str != null) {
            this.writer.write(str.toString());
        }
        return this;
    },

    ___getOutput: function() {
        return this._state.writer.toString();
    },

    /**
     * Legacy...
     */
    getOutput: function() {
        return this.___getOutput();
    },

    toString: function() {
        return this._state.writer.toString();
    },

    ___getResult: function() {
        this._result = this._result || new RenderResult(this);
        return this._result;
    },

    beginAsync: function(options) {
        if (this._sync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }

        var state = this._state;

        var currentWriter = this.writer;

        /* ┏━━━━━┓               this
           ┃ WAS ┃               ↓↑
           ┗━━━━━┛  prevWriter → currentWriter → nextWriter  */

        var newWriter = new StringWriter();
        var newStream = new AsyncStream(this.global, currentWriter, this);

        this.writer = newWriter;
        newWriter.stream = this;

        newWriter.next = currentWriter.next;
        currentWriter.next = newWriter;

        /* ┏━━━━━┓               newStream       this
           ┃ NOW ┃               ↓↑              ↓↑
           ┗━━━━━┛  prevWriter → currentWriter → newWriter → nextWriter  */

       var timeout;
       var name;

       this._remaining++;

       if (options != null) {
           if (typeof options === 'number') {
               timeout = options;
           } else {
               timeout = options.timeout;

               if (options.last === true) {
                   if (timeout == null) {
                       // Don't assign a timeout to last flush fragments
                       // unless it is explicitly given a timeout
                       timeout = 0;
                   }

                   this._lastCount++;
               }

               name = options.name;
           }
       }

       if (timeout == null) {
           timeout = AsyncStream.DEFAULT_TIMEOUT;
       }

       newStream._stack = AsyncStream.INCLUDE_STACK ? new Error().stack : null;
       newStream.name = name;

       if (timeout > 0) {
           newStream._timeoutId = setTimeout(function() {
               newStream.error(new Error('Async fragment ' + (name ? '(' + name + ') ': '') + 'timed out after ' + timeout + 'ms'));
           }, timeout);
       }

       state.events.emit('beginAsync', {
           writer: newStream, // Legacy
           parentWriter: this, // Legacy
           out: newStream,
           parentOut: this
       });

       return newStream;
    },

    _doFinish: function() {
        var state = this._state;

        state.finished = true;

        if (state.writer.end) {
            state.writer.end();
        } else {
            state.events.emit('finish', this.___getResult());
        }
    },

    end: function(data) {
        if (this._ended === true) {
            return;
        }

        this._ended = true;

        var remaining = --this._remaining;

        if (data != null) {
            this.write(data);
        }

        var currentWriter = this.writer;

        /* ┏━━━━━┓  this            nextStream
           ┃ WAS ┃  ↓↑              ↓↑
           ┗━━━━━┛  currentWriter → nextWriter → futureWriter  */

        // Prevent any more writes to the current steam
        this.writer = voidWriter;
        currentWriter.stream = null;

        // Flush the contents of nextWriter to the currentWriter
        this._flushNext(currentWriter);

        /* ┏━━━━━┓    this        ╵  nextStream
           ┃     ┃    ↓           ╵  ↓↑
           ┃ NOW ┃    voidWriter  ╵  currentWriter → futureWriter
           ┃     ┃  ──────────────┴────────────────────────────────
           ┗━━━━━┛    Flushed & garbage collected: nextWriter  */

       var parentOut = this._parentOut;

       if (parentOut === undefined) {
           if (remaining === 0) {
               this._doFinish();
           } else if (remaining - this._lastCount === 0) {
               this._emitLast();
           }
       } else {
           var timeoutId = this._timeoutId;

           if (timeoutId) {
               clearTimeout(timeoutId);
           }

           if (remaining === 0) {
               parentOut._handleChildDone();
           } else if (remaining - this._lastCount === 0) {
               this._emitLast();
           }
       }

       return this;
    },

    _handleChildDone: function() {
        var remaining = --this._remaining;

        if (remaining === 0) {
            var parentOut = this._parentOut;
            if (parentOut === undefined) {
                this._doFinish();
            } else {
                parentOut._handleChildDone();
            }
        } else if (remaining - this._lastCount === 0) {
            this._emitLast();
        }
    },

    _flushNext: function(currentWriter) {
        // It is possible that currentWriter is the
        // last writer in the chain, so let's make
        // sure there is a nextWriter to flush.
        var nextWriter = currentWriter.next;
        if (nextWriter) {
            // Flush the contents of nextWriter
            // to the currentWriter
            currentWriter.write(nextWriter.toString());

            // Remove nextWriter from the chain.
            // It has been flushed and can now be
            // garbage collected.
            currentWriter.next = nextWriter.next;

            // It's possible that nextWriter is the last
            // writer in the chain and its stream already
            // ended, so let's make sure nextStream exists.
            var nextStream = nextWriter.stream;
            if (nextStream) {
                // Point the nextStream to currentWriter
                nextStream.writer = currentWriter;
                currentWriter.stream = nextStream;
            }
        }
    },

    on: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.finished === true) {
            callback(this.___getResult());
        } else if (event === 'last') {
            this.onLast(callback);
        } else {
            state.events.on(event, callback);
        }

        return this;
    },

    once: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.finished === true) {
            callback(this.___getResult());
        } else if (event === 'last') {
            this.onLast(callback);
        } else {
            state.events.once(event, callback);
        }

        return this;
    },

    onLast: function(callback) {
        var lastArray = this._last;

        if (lastArray === undefined) {
            this._last = [callback];
        } else {
            lastArray.push(callback);
        }

        return this;
    },

    _emitLast: function() {
        var lastArray = this._last;

        var i = 0;

        function next() {
            if (i === lastArray.length) {
                return;
            }
            var lastCallback = lastArray[i++];
            lastCallback(next);

            if (lastCallback.length === 0) {
                next();
            }
        }

        next();
    },

    emit: function(type, arg) {
        var events = this._state.events;
        switch(arguments.length) {
            case 1:
                events.emit(type);
                break;
            case 2:
                events.emit(type, arg);
                break;
            default:
                events.emit.apply(events, arguments);
                break;
        }
        return this;
    },

    removeListener: function() {
        var events = this._state.events;
        events.removeListener.apply(events, arguments);
        return this;
    },

    prependListener: function() {
        var events = this._state.events;
        events.prependListener.apply(events, arguments);
        return this;
    },

    pipe: function(stream) {
        this._state.stream.pipe(stream);
        return this;
    },

    error: function(e) {
        var stack = this._stack;
        var name = this.name;

        var message;

        if (name) {
            message = 'Render async fragment error (' + name + ')';
        } else {
            message = 'Render error';
        }

        message += '. Exception: ' + (e.stack || e);

        if (stack) {
            message += '\nCreation stack trace: ' + stack;
        }

        e = new Error(message);

        try {
            this.emit('error', e);
        } finally {
            // If there is no listener for the error event then it will
            // throw a new here. In order to ensure that the async fragment
            // is still properly ended we need to put the end() in a `finally`
            // block
            this.end();
        }

        if (console) {
            console.error(message);
        }

        return this;
    },

    flush: function() {
        var state = this._state;

        if (!state.finished) {
            var writer = state.writer;
            if (writer && writer.flush) {
                writer.flush();
            }
        }
        return this;
    },

    createOut: function() {
        return new AsyncStream(this.global);
    },

    element: function(tagName, elementAttrs, openTagOnly) {
        var str = '<' + tagName +
            attrsHelper(elementAttrs) +
            '>';

        if (openTagOnly !== true) {
            str += '</' + tagName + '>';
        }

        this.write(str);
    },

    beginElement: function(name, elementAttrs) {

        var str = '<' + name +
            attrsHelper(elementAttrs) +
            '>';

        this.write(str);

        if (this._elStack) {
            this._elStack.push(name);
        } else {
            this._elStack = [name];
        }
    },

    endElement: function() {
        var tagName = this._elStack.pop();
        this.write('</' + tagName + '>');
    },

    comment: function(str) {
        this.write('<!--' + escapeXml(str) + '-->');
    },

    text: function(str) {
        this.write(escapeXml(str));
    },

    ___getNode: function(doc) {
        var node = this._node;
        var curEl;
        var newBodyEl;
        var html = this.___getOutput();

        if (!doc) {
            doc = this.___document;
        }

        if (!node) {
            if (html) {
                newBodyEl = doc.createElement('body');
                newBodyEl.innerHTML = html;
                if (newBodyEl.childNodes.length == 1) {
                    // If the rendered component resulted in a single node then just use that node
                    node = newBodyEl.childNodes[0];
                } else {
                    // Otherwise, wrap the nodes in a document fragment node
                    node = doc.createDocumentFragment();
                    while ((curEl = newBodyEl.firstChild)) {
                        node.appendChild(curEl);
                    }
                }
            } else {
                // empty HTML so use empty document fragment (so that we're returning a valid DOM node)
                node = doc.createDocumentFragment();
            }
            this._node = node;
        }
        return node;
    },

    then: function(fn, fnErr) {
        var out = this;
        var promise = new Promise(function(resolve, reject) {
            out.on('error', reject);
            out.on('finish', function(result) {
                resolve(result);
            });
        });

        return Promise.resolve(promise).then(fn, fnErr);
    },

    catch: function(fnErr) {
        return this.then(undefined, fnErr);
    },

    c: function(componentDef, key, customEvents) {
        this.___assignedComponentDef = componentDef;
        this.___assignedKey = key;
        this.___assignedCustomEvents = customEvents;
    }
};

// alias:
proto.w = proto.write;

module.exports = AsyncStream;
