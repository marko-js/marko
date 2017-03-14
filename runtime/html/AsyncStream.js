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

    this.remaining = 0;
    this.lastCount = 0;
    this.last = undefined; // Array
    this.ended = false;
    this.finished = false;
    this.ids = 0;
}

function AsyncStream(global, writer, state, shouldBuffer) {
    var finalGlobal = this.attributes = global || {};
    var originalStream;

    if (state) {
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

    this.data = {};
    this.writer = writer;
    writer.stream = this;

    this._sync = false;
    this._stack = undefined;
    this.name = undefined;
    this._timeoutId = undefined;

    this._node = undefined;

    this._elStack = undefined; // Array

    this.$c = null; // Component args
}

AsyncStream.DEFAULT_TIMEOUT = 10000;
AsyncStream.INCLUDE_STACK = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';
AsyncStream.enableAsyncStackTrace = function() {
    AsyncStream.INCLUDE_STACK = true;
};

var proto = AsyncStream.prototype = {
    constructor: AsyncStream,
    $__document: defaultDocument,
    $__isOut: true,

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

    $__getOutput: function() {
        return this._state.writer.toString();
    },

    /**
     * Legacy...
     */
    getOutput: function() {
        return this.$__getOutput();
    },

    toString: function() {
        return this._state.writer.toString();
    },

    $__getResult: function() {
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
        var newStream = new AsyncStream(this.global, currentWriter, state);

        this.writer = newWriter;
        newWriter.stream = this;

        newWriter.next = currentWriter.next;
        currentWriter.next = newWriter;

        /* ┏━━━━━┓               newStream       this
           ┃ NOW ┃               ↓↑              ↓↑
           ┗━━━━━┛  prevWriter → currentWriter → newWriter → nextWriter  */

       var timeout;
       var name;

       state.remaining++;

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

                   state.lastCount++;
               }

               name = options.name;
           }
       }

       if (timeout == null) {
           timeout = AsyncStream.DEFAULT_TIMEOUT;
       }

       newStream.stack = AsyncStream.INCLUDE_STACK ? new Error().stack : null;
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

    end: function(data) {
        if (data) {
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
        this.flushNext(currentWriter);

        /* ┏━━━━━┓    this        ╵  nextStream
           ┃     ┃    ↓           ╵  ↓↑
           ┃ NOW ┃    voidWriter  ╵  currentWriter → futureWriter
           ┃     ┃  ──────────────┴────────────────────────────────
           ┗━━━━━┛    Flushed & garbage collected: nextWriter  */


       var state = this._state;

       if (state.finished) {
           return;
       }

       var remaining;

       if (this === state.root) {
           remaining = state.remaining;
           state.ended = true;
       } else {
           var timeoutId = this._timeoutId;

           if (timeoutId) {
               clearTimeout(timeoutId);
           }

           remaining = --state.remaining;
       }

       if (state.ended) {
           if (!state.lastFired && (state.remaining - state.lastCount === 0)) {
               state.lastFired = true;
               state.lastCount = 0;
               state.events.emit('last');
           }

           if (remaining === 0) {
               state.finished = true;

               if (state.writer.end) {
                   state.writer.end();
               } else {
                   state.events.emit('finish', this.$__getResult());
               }
           }
       }

       return this;
    },

    // flushNextOld: function(currentWriter) {
    //     if (currentWriter === this._state.writer) {
    //         var nextStream;
    //         var nextWriter = currentWriter.next;
    //
    //         // flush until there is no nextWriter
    //         // or the nextWriter is still attached
    //         // to a branch.
    //         while(nextWriter) {
    //             currentWriter.write(nextWriter.toString());
    //             nextStream = nextWriter.stream;
    //
    //             if(nextStream) break;
    //             else nextWriter = nextWriter.next;
    //         }
    //
    //         // Orphan the nextWriter and everything that
    //         // came before it. They have been flushed.
    //         currentWriter.next = nextWriter && nextWriter.next;
    //
    //         // If there is a nextStream,
    //         // set its writer to currentWriter
    //         // (which is the state.writer)
    //         if(nextStream) {
    //             nextStream.writer = currentWriter;
    //             currentWriter.stream = nextStream;
    //         }
    //     }
    // },

    flushNext: function(currentWriter) {
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

        if (event === 'finish' && state.finished) {
            callback(this.$__getResult());
            return this;
        }

        state.events.on(event, callback);
        return this;
    },

    once: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.finished) {
            callback(this.$__getResult());
            return this;
        }

        state.events.once(event, callback);
        return this;
    },

    onLast: function(callback) {
        var state = this._state;

        var lastArray = state.last;

        if (!lastArray) {
            lastArray = state.last = [];
            var i = 0;
            var next = function next() {
                if (i === lastArray.length) {
                    return;
                }
                var _next = lastArray[i++];
                _next(next);
            };

            this.once('last', function() {
                next();
            });
        }

        lastArray.push(callback);
        return this;
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

    text: function(str) {
        this.write(escapeXml(str));
    },

    $__getNode: function(doc) {
        var node = this._node;
        var curEl;
        var newBodyEl;
        var html = this.$__getOutput();

        if (!doc) {
            doc = this.$__document;
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
    }
};

// alias:
proto.w = proto.write;

module.exports = AsyncStream;
