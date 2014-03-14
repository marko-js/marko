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
var StringBuilder = require('raptor-strings/StringBuilder');
var logger = require('raptor-logging').logger(module);
var promiseUtil = require('raptor-promises/util');
var extend = require('raptor-util').extend;
var EventEmitter = require('events').EventEmitter;

var includeStack = false;
var nextUniqueId = 0;

var voidWriter = {
    write: function() {}
};

function StreamWriter(stream) {
    this.stream = stream;
}

StreamWriter.prototype.write = function(data) {
    this.stream.push(data);
};

function getAsyncAttributes(context) {
    var attrs = context.attributes;
    return attrs.async;
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
        this.flushed = true;
        flushNext(this, writer);
    }
};
function AsyncFragment(context) {
    Fragment.call(this, context);
}
AsyncFragment.prototype = {
    end: function (e) {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        if (e) {
            logger.error('Async fragment failed. Exception: ' + (e.stack || e) + (this.stack ? ('\nCreation stack trace: ' + this.stack) : ''));
            this.context.emit('error', e);
        }
        if (this.finished) {
            return;
        }

        // Make sure end is only called once by the user
        this.finished = true;

        var asyncAttributes = getAsyncAttributes(this.context);

        if (this.ready) {
            // There are no nested asynchronous fragments that are
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
    },
    flush: function () {
        if (!this.finished) {
            // Skipped Flushing since not finished
            return;
        }
        this.flushed = true;
        var writer = this.writer;
        this.writer = this.context.writer = voidWriter; // Prevent additional out-of-order writes
        flushNext(this, writer);
    },

    addTimeoutHandler: function(timeoutMillis) {
        var _this = this;
        this.timeoutId = setTimeout(function () {
            _this.end('Async fragment timed out after ' + timeoutMillis + 'ms.');
        }, timeoutMillis);
    }
};



function Context(writer, attributes) {
    this.attributes = attributes || {
        events: new EventEmitter()
    };

    if (writer) {
        if (writer.pipe) {
            var stream = writer;
            writer = new StreamWriter(stream);
            this.on('end', function() {
                stream.push(null);
            });
        }
    } else {
        writer = new StringBuilder();
    }

    this.writer = writer;
    this.w = this.write;
}

Context.DEFAULT_TIMEOUT = 10000;

Context.prototype = {
    constructor: Context,
    
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

        // Create a new context that the async fragment can write to.
        // The new async context will use the existing writer and 
        // the writer for the current context (which will continue to be used)
        // will be replaced with a string buffer writer
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
        asyncFragment.stack = includeStack ? new Error().stack : null;
        
        if (timeout == null) {
            timeout = Context.DEFAULT_TIMEOUT;
        }

        if (timeout > 0) {
            asyncFragment.addTimeoutHandler(timeout);
        }

        try {
            var promise = callback(asyncContext, function(err, data) {
                if (err) {
                    return asyncFragment.end(err);
                }

                if (data) {
                    asyncContext.write(data);
                }

                asyncFragment.end();
            });
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
            asyncFragment.end(e);
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
    },

    beginRender: function() {
        var attributes = this.attributes;
        var async = this.attributes.async;

        if (async) {
            async.depth++;
        } else {
            attributes.async = {
                remaining: 0,
                depth: 1
            };
        }
    },

    endRender: function() {
        var async = this.attributes.async;
        if (--async.depth === 0) {
            async.firstPassComplete = true;
            if (async.remaining === 0) {
                this.emit('end');
            }
        }
    }
};

Context.enableAsyncStackTrace = function() {
    includeStack = true;
};

if (typeof window === 'undefined') {
    extend(Context.prototype, require('./Context' + '_server')); // String concatenation to fool the bundlers
}

module.exports = Context;