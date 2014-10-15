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
function StringBuilder() {
    this.str = '';
}

StringBuilder.prototype = {
    write: function(str) {
        this.str += str;
        return this;
    },

    /**
     * Converts the string buffer into a String.
     *
     * @returns {String} The built String
     */
    toString: function() {
        return this.str;
    }
};

var EventEmitter = require('events').EventEmitter;

var includeStack = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

var voidWriter = {
    write: function() {}
};

function onProxy(asyncWriter, type, event, callback) {
    var global = asyncWriter.global;
    var events = global.events;

    var endEvent = (event === 'end');
    if (endEvent) {
        console.error('WARNING: "end" event type is deprecated. Use "finish" instead.', (new Error()).stack);
    }

    // Writable streams are only suppose to emit "finish" but
    // "through" streams (from the "through" module) only output
    // "end" event. Therefor, we need to normalize "end" and "finish"
    // events
    if (endEvent || (event === 'finish')) {
        if (global.ended) {
            callback();
            return asyncWriter;
        }

        var emitted = false;

        var onFinish = function() {
            if (emitted) {
                return;
            }

            emitted = true;
            callback();
        };

        events[type]('end', onFinish);
        events[type]('finish', onFinish);
    } else {
        events[type](event, callback);
    }

    return asyncWriter;
}

function Fragment(asyncWriter) {
    this.asyncWriter = asyncWriter;
    // The asyncWriter that this async fragment is associated with
    this.writer = asyncWriter.writer;
    // The original writer this fragment was associated with
    this.finished = false;
    // Used to keep track if this async fragment was ended
    this.flushed = false;
    // Set to true when the contents of this async fragment have been
    // flushed to the original writer
    this.next = null;
    // A link to the next sibling async fragment (if any)
    this.ready = true;    // Will be set to true if this fragment is ready to be flushed
                          // (i.e. when there are no async fragments preceeding this fragment)
}
function flushNext(fragment, writer) {
    var next = fragment.next;
    if (next) {
        next.ready = true;
        // Since we have flushed the next fragment is ready
        next.writer = next.asyncWriter.writer = writer;
        // Update the next fragment to use the original writer
        next.flush();    // Now flush the next fragment (if it is not finish then it will just do nothing)
    }
}
function BufferedFragment(asyncWriter, buffer) {
    Fragment.call(this, asyncWriter);
    this.buffer = buffer;
}
BufferedFragment.prototype = {
    flush: function () {
        var writer = this.writer;
        writer.write(this.buffer.toString());
        this.flushed = true;
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

            if (this.ready) {
                // There are no nested asynchronous fragments that are
                // remaining and we are ready to be flushed then let's do it!
                this.flush();
            }
        }
    },
    flush: function () {
        if (!this.finished) {
            // Skipped Flushing since not finished
            return;
        }
        this.flushed = true;
        var writer = this.writer;
        this.writer = this.asyncWriter.writer = voidWriter; // Prevent additional out-of-order writes
        flushNext(this, writer);
    }
};

function AsyncWriter(writer, global, async) {
    this.global = this.attributes /* legacy */ = global || (global = {});
    this._af = this._prevAF = this._parentAF = null;
    this._isSync = false;

    if (!global.events) {
        // Use the underlying stream as the event emitter if available.
        // Otherwise, create a new event emitter
        global.events = writer && writer.on ? writer : new EventEmitter();
    }

    if (async) {
        this._async = async;
    } else {
        this._async = global.async || (global.async = {
            remaining: 0,
            ended: false,
            last: 0
        });
    }

    if (!writer) {
        writer = new StringBuilder();
    }

    this.writer = this.stream = writer;
}

AsyncWriter.DEFAULT_TIMEOUT = 10000;

AsyncWriter.prototype = {
    constructor: AsyncWriter,

    isAsyncWriter: AsyncWriter,

    sync: function() {
        this._isSync = true;
    },
    getAttributes: function () {
        return this.global;
    },
    getAttribute: function (name) {
        return this.global[name];
    },
    write: function (str) {
        if (str != null) {
            this.writer.write(str.toString());
        }
        return this;
    },
    getOutput: function () {
        return this.writer.toString();
    },
    captureString: function (func, thisObj) {
        var sb = new StringBuilder();
        this.swapWriter(sb, func, thisObj);
        return sb.toString();
    },
    swapWriter: function (newWriter, func, thisObj) {
        var oldWriter = this.writer;
        this.writer = newWriter;
        func.call(thisObj);
        this.writer = oldWriter;
    },
    createNestedContext: function (writer) {
        var _this = this;
        var child = new AsyncWriter(writer, _this.global);
        // Keep a reference to the original stream. This was done because when
        // rendering to a response stream we can get access to the request/response
        // to figure out the locale and other information associated with the
        // client. Without this we would have to rely on the request being
        // passed around everywhere or rely on something like continuation-local-storage
        // which has shown to be unreliable in some situations.
        child.stream = _this.stream;
        return child;
    },
    beginAsync: function (options) {
        if (this._isSync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }
        // Keep a count of all of the async fragments for this rendering


        var ready = true;

        // Create a new asyncWriter that the async fragment can write to.
        // The new async asyncWriter will use the existing writer and
        // the writer for the current asyncWriter (which will continue to be used)
        // will be replaced with a string buffer writer
        var asyncContext = this.createNestedContext(this.writer);
        var buffer = this.writer = new StringBuilder();
        var asyncFragment = new AsyncFragment(asyncContext);
        var bufferedFragment = new BufferedFragment(this, buffer);
        asyncFragment.next = bufferedFragment;
        asyncContext._af = asyncFragment;
        asyncContext._parentAF = asyncFragment;
        var prevAsyncFragment = this._prevAF || this._parentAF;
        // See if we are being buffered by a previous asynchronous
        // fragment
        if (prevAsyncFragment) {
            // Splice in our two new fragments and add a link to the previous async fragment
            // so that it can let us know when we are ready to be flushed
            bufferedFragment.next = prevAsyncFragment.next;
            prevAsyncFragment.next = asyncFragment;
            if (!prevAsyncFragment.flushed) {
                ready = false;    // If we are preceeded by another async fragment then we aren't ready to be flushed
            }
        }
        asyncFragment.ready = ready;
        // Set the ready flag based on our earlier checks above
        this._prevAF = bufferedFragment;
        // Record the previous async fragment for linking purposes


        asyncContext.handleBeginAsync(options);

        return asyncContext;
    },

    handleBeginAsync: function(options) {
        var _this = this;

        var async = _this._async;

        var timeout;
        var name;

        async.remaining++;

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

                    async.last++;
                }

                name = options.name;
            }
        }

        if (timeout == null) {
            timeout = AsyncWriter.DEFAULT_TIMEOUT;
        }

        _this.stack = includeStack ? new Error().stack : null;
        _this.name = name;

        if (timeout > 0) {
            _this._timeoutId = setTimeout(function() {
                _this.error(new Error('Async fragment ' + (name ? '(' + name + ') ': '') + 'timed out after ' + timeout + 'ms'));
            }, timeout);
        }
    },
    on: function(event, callback) {
        return onProxy(this, 'on', event, callback);
    },

    once: function(event, callback) {
        return onProxy(this, 'once', event, callback);
    },

    emit: function() {
        var global = this.global;

        var events = global.events;
        events.emit.apply(events, arguments);
        return this;
    },

    removeListener: function() {
        var events = this.global.events;
        events.removeListener.apply(events, arguments);
        return this;
    },

    pipe: function(stream) {
        this.stream.pipe(stream);
        return this;
    },

    error: function(e) {
        try {
            var stack = this.stack;
            var name = this.name;
            e = new Error('Async fragment failed' + (name ? ' (' + name + ')': '') + '. Exception: ' + (e.stack || e) + (stack ? ('\nCreation stack trace: ' + stack) : ''));
            this.emit('error', e);
        } finally {
             this.end();
        }
    },

    end: function(data) {
        if (data) {
            this.write(data);
        }

        var asyncFragment = this._af;

        if (asyncFragment) {
            asyncFragment.end();
            this.handleEnd(true);
        } else {
            this.handleEnd(false);
        }

        return this;
    },

    handleEnd: function(isAsync) {
        var async = this._async;

        var isCompleted = false;

        // Keep track of how many asynchronous fragments are in the template
        // NOTE: firstPassComplete changes to true after processing all of the nodes of the template
        if (isAsync) {
            var timeoutId = this._timeoutId;
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            if (--async.remaining - async.last === 0 && async.ended) {
                isCompleted = true;
            }
        } else {
            async.ended = true;

            if (async.remaining - async.last === 0) {
                isCompleted = true;
            }
        }

        if (isCompleted) {
            if (!async.lastFired) {
                this.emit('last');
                async.last = 0;
                async.lastFired = true;
            }

            if (async.remaining === 0) {
                this.global.ended = true;
                this._finish();    
            }
        }
    },

    _finish: function() {
        if (this.stream.end) {
            this.stream.end();
        } else {
            this.emit('finish');
        }
    }
};

AsyncWriter.prototype.w = AsyncWriter.prototype.write;

AsyncWriter.enableAsyncStackTrace = function() {
    includeStack = true;
};

module.exports = AsyncWriter;
