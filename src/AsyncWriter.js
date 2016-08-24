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

// USED FOR DEBUGGING, REMOVE:
global.ids = 0;
global.debug = function() {
    [].unshift.call(arguments, '\t');
    console.log.apply(console, arguments);
};
global.debug.next = function() {
    [].unshift.call(arguments, '\n');
    console.log.apply(console, arguments);
};

var AsyncTracker = require('./AsyncTracker');
var StringWriter = require('./StringWriter')
var BufferedWriter = require('./BufferedWriter')
var AsyncFragment = require('./Fragments').AsyncFragment;
var BufferedFragment = require('./Fragments').BufferedFragment;
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
            if (this.__writer) {
                debug('('+this.name+').writer: (sw-'+w.id+'); was', this.__writer.id);
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
            debug.next('('+this.name+').write('+str+')');
            this.writer.write(str.toString());
        }
        return this;
    },
    getOutput: function () {
        return this.writer.toString();
    },
    createNestedWriter: function (writer, options) {
        var newOut = new AsyncWriter(
                writer,
                this.global /* Global data is shared */,
                this._tracker /* Internal async metadata is shared */,
                this._events /* Internal EventEmitter is shared */);

        newOut.name = options && options.name;

        // Keep a reference to the original stream. This was done because when
        // rendering to a response stream we can get access to the request/response
        // to figure out the locale and other information associated with the
        // client. Without this we would have to rely on the request being
        // passed around everywhere or rely on something like continuation-local-storage
        // which has shown to be unreliable in some situations.
        newOut._stream = this._stream; // This is the original stream or the stream wrapped with a BufferedWriter
        newOut.stream = this.stream;   // HACK: This is the user assigned stream and not the stream
                                       //       that was wrapped with a BufferedWriter.

        var currentBuffer = writer.fragment;
        if (currentBuffer) {
            currentBuffer.asyncWriter = newOut;
        }

        return newOut;
    },
    createAsyncFragment: function() {
        var asyncFragment = new AsyncFragment(this);
        this._af = this._currentFragment = asyncFragment;
        return asyncFragment;
    },
    createBufferedFragment: function () {
        // Store the previousFragment so we can splice in
        // other fragments into the chain
        this._previousFragment = this._currentFragment;

        // Create a new StringWriter to act as a
        // buffer for this AsyncWriter.
        var buffer = this.writer = new StringWriter();

        // Wrap the buffer in a BufferedFragment and
        // set it as the currentFragment
        var bufferedFragment = this._currentFragment = new BufferedFragment(this, buffer)

        return bufferedFragment;
    },
    linkFragments: function (newAsyncFragment, currentFragment) {
        newAsyncFragment.next = currentFragment;
        currentFragment.prev = newAsyncFragment;

        // Splice in our two new fragments
        // If this is already part of the chain
        var previousFragment = this._previousFragment;
        if (previousFragment) {
            if (previousFragment.next) {
                currentFragment.next = previousFragment.next;
                previousFragment.next.prev = currentFragment;
            }
            previousFragment.next = newAsyncFragment;
            newAsyncFragment.prev = previousFragment;
        }

        delete this._previousFragment;
    },
    beginAsync: function (options) {
        if (this._isSync) {
            throw new Error('beginAsync() not allowed when using renderSync()');
        }

        debug.next('('+(options&&options.name)+') = ('+this.name+').beginAsync()');

        // Create a new AsyncWriter that the async fragment can write to.
        // The new AsyncWriter will use the existing writer and
        // the writer for the current asyncWriter (which will continue to be used)
        // will be replaced with a string buffer writer
        var newAsyncWriter = this.createNestedWriter(this.writer, options);
        var newAsyncFragment = newAsyncWriter.createAsyncFragment();
        var currentFragment = this.createBufferedFragment();

        this.linkFragments(newAsyncFragment, currentFragment);
        this._tracker.begin(newAsyncWriter, this, options);

        debug('('+newAsyncWriter.name+').writer: (sw-'+newAsyncWriter.writer.id+')');

        return newAsyncWriter;
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

        debug.next('('+this.name+').end()');

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
