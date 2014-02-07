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
/**
 * The {@link raptor/render-context/Context} class represents a "rendering context"
 * suitable for rendering HTML to a writer. A context object is required when rendering
 * a template and the context object contains a reference to an underlying writer object that is
 * used to capture the rendered output.
 */
'use strict';
var StringBuilder = require('raptor-strings/StringBuilder');
var logger = require('raptor-logging').logger(module);
var promiseUtil = require('raptor-promises/util');
var extend = require('raptor-util').extend;
var EventEmitter = require('events').EventEmitter;

var nextUniqueId = 0;

function getAsyncAttributes(context) {
    var attrs = context.attributes;
    return attrs.async;
}

function addTimeoutHandler(timeoutMillis, asyncFragment) {
    setTimeout(function () {
        if (!asyncFragment.finished) {
            logger.error('Async fragment timed out after ' + timeoutMillis + 'ms. Creation stack trace: ' + asyncFragment.stack);
            asyncFragment.end();
        }
    }, timeoutMillis);
}
function Fragment(context) {
    this.context = context;
    // The context that this async fragment is associated with
    this.writer = context.writer;
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
        next.writer = next.context.writer = writer;
        // Update the next fragment to use the original writer
        next.flush();    // Now flush the next fragment (if it is not finish then it will just do nothing)
    }
}
function BufferedFragment(context, buffer) {
    Fragment.call(this, context);
    this.buffer = buffer;
}
BufferedFragment.prototype = {
    flush: function () {
        if (!this.ready || this.flushed) {
            throw new Error('Invalid state');
        }
        var writer = this.writer;
        writer.write(this.buffer.toString());
        //this.writer = this.context.writer = voidWriter; // Prevent additional out-of-order writes
        this.flushed = true;
        flushNext(this, writer);
    }
};
function AsyncFragment(context) {
    Fragment.call(this, context);
}
AsyncFragment.prototype = {
    end: function (e) {
        if (e) {
            logger.error('Async fragment failed. Exception: ' + (e.stack || e) + '\n Creation stack trace: ' + this.stack);
        }
        if (this.finished) {
            return;
        }
        var asyncAttributes = getAsyncAttributes(this.context);
        try {
            // Make sure end is only called once by the user
            this.finished = true;
            if (this.ready) {
                // There are no nesting asynchronous fragments that are
                // remaining and we are ready to be flushed then let's do it!
                this.flush();
            }
            // Keep track of how many asynchronous fragments are in the template
            // NOTE: firstPassComplete changes to true after processing all of the nodes of the template
            if (--asyncAttributes.remaining === 0 && asyncAttributes.firstPassComplete) {
                // If we were the last fragment to complete then fulfil the promise for
                // the template rendering using the output of the underlying writer
                this.context.emit('end');
            }
        } catch (e) {
            this.context.emit('error', e);
        }
    },
    flush: function () {
        if (!this.ready || this.flushed) {
            throw new Error('Invalid state');
        }
        if (!this.finished) {
            // Skipped Flushing since not finished
            return;
        }
        this.flushed = true;
        flushNext(this, this.writer);
    }
};



function Context(writer, attributes) {
    this.writer = writer;
    this.w = this.write;
    this.listeners = {};
    this.attributes = attributes || {
        events: new EventEmitter()
    };
}

Context.DEFAULT_TIMEOUT = 10000;

Context.prototype = {
    getAttributes: function () {
        return this.attributes;
    },
    getAttribute: function (name) {
        return this.attributes[name];
    },
    uniqueId: function () {
        return 'c' + nextUniqueId++;
    },
    write: function (str) {
        if (str !== null && str !== undefined) {
            if (typeof str !== 'string') {
                str = str.toString();
            }
            this.writer.write(str);
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
        try {
            this.writer = newWriter;
            func.call(thisObj);
        } finally {
            this.writer = oldWriter;
        }
    },
    createNestedContext: function (writer) {
        return new Context(writer, this.attributes);
    },
    beginAsyncFragment: function (callback, timeout) {
        var asyncAttributes = getAsyncAttributes(this);
        // Keep a count of all of the async fragments for this rendering
        asyncAttributes.remaining++;
        var ready = true;
        var asyncContext = this.createNestedContext(this.writer);
        var buffer = new StringBuilder();
        this.writer = buffer;
        var asyncFragment = new AsyncFragment(asyncContext);
        var bufferedFragment = new BufferedFragment(this, buffer);
        asyncFragment.next = bufferedFragment;
        asyncContext.parentAsyncFragment = asyncFragment;
        var prevAsyncFragment = this.prevAsyncFragment || this.parentAsyncFragment;
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
        this.prevAsyncFragment = bufferedFragment;
        // Record the previous async fragment for linking purposes
        asyncFragment.stack = new Error().stack;
        if (timeout == null) {
            timeout = Context.DEFAULT_TIMEOUT;
        }
        if (timeout > 0) {
            addTimeoutHandler(timeout, asyncFragment);
        }
        try {
            var promise = callback(asyncContext, asyncFragment);
            // Provide the user with the async context and the async fragment
            if (promise) {
                promiseUtil.immediateThen(
                    promise, 
                    function (result) {
                        if (result != null) {
                            asyncContext.write(result);
                        }
                        asyncFragment.end();
                    },
                    function (e) {
                        asyncFragment.end(e);
                    });
            }
        } catch (e) {
            logger.error('beginAsyncFragment failed. Exception: ' + e, e);
            asyncFragment.end();
        }
    },
    on: function(event, callback) {
        var attributes = this.attributes;

        if (event === 'end') {
            if (attributes.ended) {
                callback();
                return this;
            }
        }

        var events = attributes.events;
        return events.on.apply(events, arguments);
    },

    emit: function(event) {
        var attributes = this.attributes;

        if (event === 'end') {
            attributes.ended = true;
        }

        var events = attributes.events;
        return events.emit.apply(events, arguments);
    }
};

if (typeof window === 'undefined') {
    extend(Context.prototype, require('./Context_server.js'));
}

module.exports = Context;