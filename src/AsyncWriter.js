/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var ids = 0;

function StringWriter(events) {
    this.str = '';
    this.events = events;
    this.finished = false;
    this.id = ids++;
    console.log('(sw-'+this.id+').create()');
}

StringWriter.prototype = {
    end: function() {
        this.finished = true;
        if (this.events) {
            this.events.emit('finish');
        }
    },

    write: function(str) {
        this.str += str;
        console.log('(sw-'+this.id+').write('+str+'); now:', this.str);
        return this;
    },

    /**
     * Converts the string buffer into a String.
     *
     * @returns {String} The built String
     */
    toString: function() {
        return this.str;
    },

    flush: function() {
        var str = this.str;
        this.str = '';
        return str;
    }
};

/**
 * Simple wrapper that can be used to wrap a stream
 * to reduce the number of write calls. In Node.js world,
 * each stream.write() becomes a chunk. We can avoid overhead
 * by reducing the number of chunks by buffering the output.
 */
function BufferedWriter(wrappedStream) {
    this._buffer = '';
    this._wrapped = wrappedStream;
}

BufferedWriter.prototype = {
    write: function(str) {
        console.log('BUFFER:', str);
        this._buffer += str;
    },

    flush: function() {
        console.log('FLUSH:', this._buffer);
        if (this._buffer.length !== 0) {
            this._wrapped.write(this._buffer);
            this._buffer = '';
            if (this._wrapped.flush) {
                this._wrapped.flush();
            }
        }
    },

    end: function() {
        this.flush();
        if(!this._wrapped.isTTY) {
            this._wrapped.end();
        }
    },
    on: function(event, callback) {
        return this._wrapped.on(event, callback);
    },
    once: function(event, callback) {
        return this._wrapped.once(event, callback);
    },

    clear: function() {
        this._buffer = '';
    }
};

var voidWriter = {
    id:'void',
    write: function(str) {
        console.log('UH OH', str)
    }
};

function Fragment(asyncWriter) {
    this.asyncWriter = asyncWriter;
    // The asyncWriter that this async fragment is associated with

    this.finished = false;
    // Used to keep track if this async fragment was ended

    Object.defineProperty(this, "next", {
        get: function () { return this.__nextFragment; },
        set: function (f) {
            var message = ''
            if(this instanceof BufferedFragment) {
                message += '(bf-'+this.buffer.id+')';
            } else {
                message += '(af-'+this.asyncWriter.name+')';
            }

            message += '.next: ';

            if(f) {
                if(f instanceof BufferedFragment) {
                    message += '(bf-'+f.buffer.id+')';
                } else {
                    message += '(af-'+f.asyncWriter.name+')';
                }
            } else {
                message += 'null'
            }

            if(this.__nextFragment) {
                message += '; was '
                if(this.__nextFragment instanceof BufferedFragment) {
                    message += '(bf-'+this.__nextFragment.buffer.id+')';
                } else {
                    message += '(af-'+this.__nextFragment.asyncWriter.name+')';
                }
            }

            console.log(message);
            this.__nextFragment = f;
        },
    });
    Object.defineProperty(this, "prev", {
        get: function () { return this.__prevFragment; },
        set: function (f) {
            var message = ''
            if(this instanceof BufferedFragment) {
                message += '(bf-'+this.buffer.id+')';
            } else {
                message += '(af-'+this.asyncWriter.name+')';
            }

            message += '.prev: ';

            if(f) {
                if(f instanceof BufferedFragment) {
                    message += '(bf-'+f.buffer.id+')';
                } else {
                    message += '(af-'+f.asyncWriter.name+')';
                }
            } else {
                message += 'null'
            }

            if(this.__prevFragment) {
                message += '; was '
                if(this.__prevFragment instanceof BufferedFragment) {
                    message += '(bf-'+this.__prevFragment.buffer.id+')';
                } else {
                    message += '(af-'+this.__prevFragment.asyncWriter.name+')';
                }
            }

            console.log(message);
            this.__prevFragment = f;
        },
    });
}
function flushNext(fragment, writer) {
    var next = fragment.next;
    if (next && fragment.asyncWriter.finished) {
        next.asyncWriter.writer = writer;
        // Update the next fragment to use the original writer
        next.flush();
        // Now flush the next fragment (if it is not finish then it will just do nothing)
    }
}
function BufferedFragment(asyncWriter, buffer) {
    Fragment.call(this, asyncWriter);
    this.buffer = buffer;
    buffer.fragment = this;
}
BufferedFragment.prototype = {
    flush: function () {
        var writer = this.asyncWriter.writer;
        var bufferedString = this.buffer.flush();

        console.log('(bf-'+this.buffer.id+').flush('+bufferedString+') to '+writer.id);

        if (bufferedString.length !== 0) {
            writer.write(bufferedString);
        }

        flushNext(this, writer);
    }
};

function AsyncFragment(asyncWriter) {
    Fragment.call(this, asyncWriter);
}

AsyncFragment.prototype = {
    end: function () {
        if (!this.finished) {
            // Make sure end is only called once by the user
            this.finished = true;
            this.flush();
        }
    },
    flush: function () {
        if(this.asyncWriter.writer != this.asyncWriter._stream) {
            console.log('(skipflush)', this.asyncWriter.name, this.asyncWriter.writer.id, this.asyncWriter._stream.id);
            return;
        }
        if (!this.finished) {
            // Skipped Flushing since not finished
            console.log('(skipflush)', this.asyncWriter.name, 'next:', this.next && this.next.asyncWriter.name)
            return;
        }
        console.log('(af-'+this.asyncWriter.name+').flush()', this.asyncWriter.writer.id);
        var writer = this.asyncWriter.writer;
        this.writer = this.asyncWriter.writer = voidWriter; // Prevent additional out-of-order writes
        flushNext(this, writer);
    }
};

var AsyncTracker = require('./AsyncTracker');
var EventEmitter = require('events').EventEmitter;

function AsyncWriter(writer, global, tracker, events, buffer) {
    this.data = {};
    this.global = this.attributes /* legacy */ = (global || (global = {}));
    this._af = this._prevAF = this._parentAF = null;
    this._isSync = false;
    this._last = null;

    Object.defineProperty(this, "writer", {
        get: function () { return this.__writer; },
        set: function (w) {
            if(this.__writer) {
                console.log('('+this.name+').writer: (sw-'+w.id+'); was', this.__writer.id);
            }
            this.__writer = w;
        },
    });

    if (!events) {
        // Use the underlying stream as the event emitter if available.
        // Otherwise, create a new event emitter
        events = writer && writer.on ? writer : new EventEmitter();
    }

    this._events = global.events /* deprecated */ = events;
    this._tracker = tracker || new AsyncTracker(this);

    var stream;

    if (!writer) {
        writer = new StringWriter(this._events);
    } else if (buffer) {
        stream = writer;
        writer = new BufferedWriter(writer);
    }

    this.stream = stream || writer;
    this.writer = this._stream = writer;
}

AsyncWriter.DEFAULT_TIMEOUT = 10000;
AsyncWriter.INCLUDE_STACK = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';
AsyncWriter.enableAsyncStackTrace = function() {
    AsyncWriter.INCLUDE_STACK = true;
};

var proto = AsyncWriter.prototype = {
    constructor: AsyncWriter,

    isAsyncWriter: AsyncWriter,

    sync: function() {
        this._isSync = true;
    },
    write: function (str) {
        if (str != null) {
            console.log('('+this.name+').write('+str+')');
            //if(str == '4a') console.log(this);
            this.writer.write(str.toString());
        }
        return this;
    },
    getOutput: function () {
        return this.writer.toString();
    },
    createNestedWriter: function (writer) {
        var child = new AsyncWriter(
                writer,
                this.global /* Global data is shared */,
                this._tracker /* Internal async metadata is shared */,
                this._events /* Internal EventEmitter is shared */);

        // Keep a reference to the original stream. This was done because when
        // rendering to a response stream we can get access to the request/response
        // to figure out the locale and other information associated with the
        // client. Without this we would have to rely on the request being
        // passed around everywhere or rely on something like continuation-local-storage
        // which has shown to be unreliable in some situations.
        child._stream = this._stream; // This is the original stream or the stream wrapped with a BufferedWriter
        child.stream = this.stream; // HACK: This is the user assigned stream and not the stream
                                     //       that was wrapped with a BufferedWriter.
        return child;
    },
    beginAsync: function (options) {
        if (this._isSync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }

        options = options || {}
        console.log('('+options.name+') = ('+this.name+').beginAsync()');

        // Create a new asyncWriter that the async fragment can write to.
        // The new async asyncWriter will use the existing writer and
        // the writer for the current asyncWriter (which will continue to be used)
        // will be replaced with a string buffer writer
        var asyncOut = this.createNestedWriter(this.writer);
        var currentBufferedFragment = this.writer.fragment;

        if(currentBufferedFragment) {
            currentBufferedFragment.asyncWriter = asyncOut;
        }

        asyncOut.name = options.name;
        console.log('('+asyncOut.name+').writer: (sw-'+this.writer.id+')');

        var buffer = this.writer = new StringWriter();
        var asyncFragment = new AsyncFragment(asyncOut);
        var bufferedFragment = new BufferedFragment(this, buffer);
        var previousBuffer = this._buffer;
        this._buffer = bufferedFragment;
        asyncFragment.next = bufferedFragment;
        bufferedFragment.prev = asyncFragment;
        asyncOut._af = asyncFragment;

        var prevAsyncFragment = previousBuffer || this._af;
        // See if we are being buffered by a previous async fragment

        if (prevAsyncFragment) {
            // Splice in our two new fragments
            bufferedFragment.next = prevAsyncFragment.next;
            if(prevAsyncFragment.next) prevAsyncFragment.next.prev = bufferedFragment;
            prevAsyncFragment.next = asyncFragment;
            asyncFragment.prev = prevAsyncFragment;
        }

        this._tracker.beginAsync(asyncOut, this, options);

        return asyncOut;
    },
    on: function(event, callback) {
        if (event === 'finish' && this.writer.finished) {
            callback();
            return this;
        }

        this._events.on(event, callback);
        return this;
    },

    once: function(event, callback) {
        if (event === 'finish' && this.writer.finished) {
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
        this._stream.pipe(stream);
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
    },

    end: function(data) {
        if (data) {
            this.write(data);
        }

        this.finished = true;

        console.log('('+this.name+').end()');

        var asyncFragment = this._af;

        if (asyncFragment) {
            asyncFragment.end();
        }

        this._tracker.end(this);

        return this;
    },

    flush: function() {
        if (!this._tracker.finished) {
            var stream = this._stream;
            if (stream && stream.flush) {
                stream.flush();
            }
        }
    }
};

// short alias
proto.w = AsyncWriter.prototype.write;

// DEPRECATED:
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

module.exports = AsyncWriter;
