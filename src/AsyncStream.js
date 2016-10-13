'use strict';

var EventEmitter = require('events').EventEmitter;
var StringWriter = require('./StringWriter');
var BufferedWriter = require('./BufferedWriter');

var voidWriter = { write:function(){} };

function State(stream, originalWriter, events) {
    this.originalStream = stream;
    this.originalWriter = originalWriter;
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
    var finalStream;

    if (state) {
        finalStream = state.stream;
    } else {
        var events = finalGlobal.events /* deprecated */ = writer && writer.on ? writer : new EventEmitter();

        if (!writer) {
            writer = new StringWriter(events);
        } else if (shouldBuffer) {
            finalStream = writer;
            writer = new BufferedWriter(writer);
        }

        finalStream = finalStream || writer;
        state = new State(this, writer, events);
    }

    this.global = finalGlobal;
    this.stream = finalStream;
    this._state = state;

    this.data = {};
    this.writer = writer;
    writer.stream = this;

    this._sync = false;
    this._stack = undefined;
    this._timeoutId = undefined;
}

AsyncStream.DEFAULT_TIMEOUT = 10000;
AsyncStream.INCLUDE_STACK = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';
AsyncStream.enableAsyncStackTrace = function() {
    AsyncStream.INCLUDE_STACK = true;
};

var proto = AsyncStream.prototype = {
    constructor: AsyncStream,
    isAsyncWriter: AsyncStream,

    sync: function() {
        this._sync = true;
    },

    write: function (str) {
        if (str != null) {
            this.writer.write(str.toString());
        }
        return this;
    },

    getOutput: function () {
        return this._state.originalWriter.toString();
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

       state.originalStream.emit('beginAsync', {
           writer: newStream,
           parentWriter: this
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

       if (this === state.originalStream) {
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
               state.originalStream.emit('last');
           }

           if (remaining === 0) {
               state.finished = true;
               if (state.originalWriter.end) {
                   state.originalWriter.end();
               } else {
                   state.originalStream.emit('finish');
               }
           }
       }

        return this;
    },

    // flushNextOld: function(currentWriter) {
    //     if (currentWriter === this._originalWriter) {
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
    //         // (which is the originalWriter)
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

        if (event === 'finish' && state.originalWriter.finished) {
            callback();
            return this;
        }

        state.events.on(event, callback);
        return this;
    },

    once: function(event, callback) {
        var state = this._state;

        if (event === 'finish' && state.originalWriter.finished) {
            callback();
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
        this._state.originalWriter.pipe(stream);
        return this;
    },

    error: function(e) {
        var stack = this._stack;
        var name = this.name;

        var message = 'Async fragment failed' + (name ? ' (' + name + ')': '') + '. Exception: ' + (e.stack || e) + (stack ? ('\nCreation stack trace: ' + stack) : '');
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
            var stream = state.originalWriter;
            if (stream && stream.flush) {
                stream.flush();
            }
        }
        return this;
    },

    // Deprecated BEGIN:
    getAttributes: function() {
        return this.global;
    },
    getAttribute: function(name) {
        return this.global[name];
    },

    createOut: function() {
        return new AsyncStream(this.global);
    },

    captureString: function(func, thisObj) {
        var sb = new StringWriter();
        this.swapWriter(sb, func, thisObj);
        return sb.toString();
    },
    swapWriter: function(newWriter, func, thisObj) {
        var currentWriter = this.writer;
        this.writer = newWriter;
        func.call(thisObj);
        this.writer = currentWriter;
    }
    // // Deprecated END
};

// alias:
proto.w = proto.write;

module.exports = AsyncStream;