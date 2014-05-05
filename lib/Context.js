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


var logger = require('raptor-logging').logger(module);
var EventEmitter = require('events').EventEmitter;

var includeStack = false;

var voidWriter = {
    write: function() {}
};

function onProxy(context, type, event, callback) {
    var attributes = context.attributes;

    if (event === 'end') {
        if (attributes.ended) {
            callback();
            return context;
        }
    }

    var events = attributes.events;
    events[type](event, callback);
    return context;
}

function getAsyncAttributes(context) {
    var attrs = context.attributes;
    return attrs.async;
}

function handleEnd(context, asyncAttributes) {
    
    if (!asyncAttributes.lastFired) {
        context.emit('last');
        asyncAttributes.last = 0;
        asyncAttributes.lastFired = true;
    }
    
    

    if (asyncAttributes.remaining === 0) {
        // If we were the last fragment to complete then fulfil the promise for
        // the template rendering using the output of the underlying writer
        context.emit('end');    
    }
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

        try {
            if (e) {
                logger.error('Async fragment failed. Exception: ' + (e.stack || e) + (this.stack ? ('\nCreation stack trace: ' + this.stack) : ''));
                this.context.emit('error', e);    
            }    
        } finally {
            if (!this.finished) {
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
                if (--asyncAttributes.remaining - asyncAttributes.last === 0 && asyncAttributes.ended) {
                    handleEnd(this.context, asyncAttributes);
                }

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
    this.attributes = attributes || (attributes = {});


    if (!attributes.events) {
        attributes.events = new EventEmitter();
    }

    if (!attributes.async) {
        if (writer && writer.end) {
            this.on('end', function() {
                writer.end();
            });
        }

        attributes.async = {
            remaining: 0,
            ended: false,
            last: 0
        };
    }

    if (!writer) {
        writer = new StringBuilder();
    }

    this.writer = this.stream = writer;
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
    write: function (str) {
        if (str != null) {
            this.writer.write(typeof str === 'string' ? str : str.toString());
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
    beginAsync: function (options) {
        var asyncAttributes = getAsyncAttributes(this);
        // Keep a count of all of the async fragments for this rendering
        asyncAttributes.remaining++;

        var ready = true;

        // Create a new context that the async fragment can write to.
        // The new async context will use the existing writer and 
        // the writer for the current context (which will continue to be used)
        // will be replaced with a string buffer writer
        var asyncContext = this.createNestedContext(this.writer);
        var buffer = this.writer = new StringBuilder();
        var asyncFragment = new AsyncFragment(asyncContext);
        var bufferedFragment = new BufferedFragment(this, buffer);
        asyncFragment.next = bufferedFragment;
        asyncContext.asyncFragment = asyncFragment;
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

        var timeout;

        if (options != null) {
            if (typeof options === 'number') {
                timeout = options;
            } else {
                timeout = options.timeout;
                if (options.last === true) {
                    asyncAttributes.last++;
                }
            }
        }
        
        if (timeout == null) {
            timeout = Context.DEFAULT_TIMEOUT;
        }

        if (timeout > 0) {
            asyncFragment.addTimeoutHandler(timeout);
        }

        return asyncContext;
    },
    on: function(event, callback) {
        return onProxy(this, 'on', event, callback);
    },

    once: function(event, callback) {
        return onProxy(this, 'once', event, callback);
    },

    emit: function(event) {
        var attributes = this.attributes;

        if (event === 'end') {
            attributes.ended = true;
        }

        var events = attributes.events;
        events.emit.apply(events, arguments);
        return this;
    },

    pipe: function(stream) {
        this.stream.pipe(stream);
        return this;
    },

    error: function(e) {
        if (this.asyncFragment) {
            this.asyncFragment.end(e);
        } else {
            this.emit('error', e);
        }
    },

    end: function(data) {
        if (data) {
            this.write(data);
        }

        if (this.asyncFragment) {
            this.asyncFragment.end();
        } else {
            var async = this.attributes.async;
            async.ended = true;

            if (async.remaining - async.last === 0) {
                handleEnd(this, async);
            }
        }

        return this;
    }
};

Context.prototype.w = Context.prototype.write;

Context.enableAsyncStackTrace = function() {
    includeStack = true;
};

module.exports = Context;