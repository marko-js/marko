'use strict';

var EventEmitter = require('events').EventEmitter;
var AsyncTracker = require('./AsyncTracker');
var StringWriter = require('./StringWriter');
var BufferedWriter = require('./BufferedWriter');

var voidWriter = { write:function(){} };

function AsyncStream(writer, parent, global, buffer) {
    var finalGlobal;
    var events;
    var finalStream;
    var tracker;
    var originalWriter;

    if (parent) {
        finalStream = parent.stream;
        finalGlobal = parent.global;
        events = parent._events;
        tracker = parent._tracker;
        originalWriter = parent._originalWriter;
    } else {
        finalGlobal = global || (global = {});
        events = global.events /* deprecated */ = writer && writer.on ? writer : new EventEmitter();

        if (!writer) {
            writer = new StringWriter(events);
        } else if (buffer) {
            finalStream = writer;
            writer = new BufferedWriter(writer);
        }

        finalStream = finalStream || writer;
        originalWriter = writer;
        tracker = new AsyncTracker(this, originalWriter);
    }

    this.global = this.attributes /* legacy */ = finalGlobal;
    this._events = events;
    this.stream = finalStream;
    this._tracker = tracker;
    this._originalWriter = originalWriter;

    this.data = {};
    this.writer = writer;
    writer.stream = this;
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
        this._isSync = true;
    },

    write: function (str) {
        if (str != null) {
            this.writer.write(str.toString());
        }
        return this;
    },

    getOutput: function () {
        return this._originalWriter.toString();
    },

    beginAsync: function(options) {
        if (this._isSync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }

        var currentWriter = this.writer;

        /* ┏━━━━━┓               this
           ┃ WAS ┃               ↓↑
           ┗━━━━━┛  prevWriter → currentWriter → nextWriter  */

        var newWriter = new StringWriter();
        var newStream = new AsyncStream(currentWriter, this);

        this.writer = newWriter;
        newWriter.stream = this;

        newWriter.next = currentWriter.next;
        currentWriter.next = newWriter;

        /* ┏━━━━━┓               newStream       this
           ┃ NOW ┃               ↓↑              ↓↑
           ┗━━━━━┛  prevWriter → currentWriter → newWriter → nextWriter  */

        this._tracker.begin(newStream, this, options);

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

        this._tracker.end(this);
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
        if (event === 'finish' && this._originalWriter.finished) {
            callback();
            return this;
        }

        this._events.on(event, callback);
        return this;
    },

    once: function(event, callback) {
        if (event === 'finish' && this._originalWriter.finished) {
            callback();
            return this;
        }

        this._events.once(event, callback);
        return this;
    },

    onLast: function(callback) {
        var lastArray = this._last;

        if (!lastArray) {
            lastArray = this._last = [];
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
        var events = this._events;
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
        var events = this._events;
        events.removeListener.apply(events, arguments);
        return this;
    },

    prependListener: function() {
        var events = this._events;
        events.prependListener.apply(events, arguments);
        return this;
    },

    pipe: function(stream) {
        this._originalWriter.pipe(stream);
        return this;
    },

    error: function(e) {
        var stack = this.stack;
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
        if (!this._tracker.finished) {
            var stream = this._originalWriter;
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
proto.w = AsyncStream.prototype.write;



module.exports = AsyncStream;