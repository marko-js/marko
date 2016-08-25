'use strict';

var EventEmitter = require('events').EventEmitter;
var AsyncTracker = require('./AsyncTracker');
var StringWriter = require('./StringWriter');
var BufferedWriter = require('./BufferedWriter');

var voidWriter = { write:function(){} };
var ids = 0;

function AsyncStream(writer, parent, global, buffer) {
    if (!parent) {
        this.global = this.attributes /* legacy */ = global || (global = {});
        this._events = global.events /* deprecated */ = writer && writer.on ? writer : new EventEmitter();

        var stream;

        if (!writer) {
            writer = new StringWriter(this._events);
        } else if (buffer) {
            stream = writer;
            writer = new BufferedWriter(writer);
        }

        this.stream = stream || writer;
        this._originalWriter = writer;
        this._tracker = new AsyncTracker(this);
    } else {
        this.stream = parent.stream;
        this.global = this.attributes /* legacy */ = parent.global;
        this._events = parent._events;
        this._tracker = parent._tracker;
        this._originalWriter = parent._originalWriter;
    }

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
        return this.writer === voidWriter ? this._originalWriter.toString() : this.writer.toString();
    },

    beginAsync: function(options) {
        if (this._isSync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }

        /*  BEFORE:
            =======
                         this
                         ↓↑
            prevWriter → this.writer(oldWriter) → nextWriter  */

        var oldWriter = this.writer;
        var newWriter = new StringWriter();
        var newStream = new AsyncStream(oldWriter, this);

        this.writer = newWriter;
        newWriter.stream = this;

        newWriter.next = oldWriter.next;
        oldWriter.next = newWriter;

        /*  AFTER:
            ======
                         newStream   this
                         ↓↑          ↓↑
            prevWriter → oldWriter → newWriter → nextWriter  */

        this._tracker.begin(newStream, this, options);

        return newStream;
    },

    end: function(data) {
        if (data) {
            this.write(data);
        }

        /*  BEFORE:
            =======
            this                                  nextStream
            ↓↑                                    ↓↑
            this.writer(oldWriter) → nextWriter1 → nextWriter2 → futureWriter  */

        var oldWriter = this.writer;
        this.writer = voidWriter;
        oldWriter.stream = null;

        /*  AFTER:
            ======
            this        |  null                     nextStream
            ↓           |  ↑                        ↓↑
            voidWriter  |  oldWriter → nextWriter1 → nextWriter2 → futureWriter  */

        if (oldWriter === this._originalWriter) {
            var nextStream;
            var nextWriter = oldWriter.next;

            // flush until there is no nextWriter
            // or the nextWriter is still attached
            // to a branch.
            while(nextWriter) {
                oldWriter.write(nextWriter.toString());
                nextStream = nextWriter.stream;

                if(nextStream) break;
                else nextWriter = nextWriter.next;
            }

            // Orphan the nextWriter and everything that
            // came before it. They have been flushed.
            oldWriter.next = nextWriter && nextWriter.next;

            // If there is a nextStream,
            // set its writer to oldWriter
            // (which is the originalWriter)
            if(nextStream) {
                nextStream.writer = oldWriter;
                oldWriter.stream = nextStream;
            }

            /*  AFTER:
                ======
                this        |  nextStream
                ↓           |  ↓↑
                voidWriter  |  oldWriter → futureWriter

                FLUSHED & GARBAGE COLLECTED:
                ============================
                nextWriter1, nextWriter2                  */

        }

        this._tracker.end(this);
        return this;
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
        events.emit.apply(events, arguments);
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
    }
}

// alias:
proto.w = AsyncStream.prototype.write;

// deprecated:
proto.getAttributes = function () {
    return this.global;
};
proto.getAttribute = function (name) {
    return this.global[name];
};
proto.captureString = function (func, thisObj) {
    var sb = new StringWriter();
    this.swapWriter(sb, func, thisObj);
    return sb.toString();
};
proto.swapWriter = function (newWriter, func, thisObj) {
    var oldWriter = this.writer;
    this.writer = newWriter;
    func.call(thisObj);
    this.writer = oldWriter;
};

module.exports = AsyncStream;