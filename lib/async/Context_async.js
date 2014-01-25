'use strict';
var StringBuilder = require('../strings/StringBuilder');
var logger = require('raptor-logging').logger(module);
var renderContext = require('raptor-render-context');
var promiseUtil = require('raptor-promises/util');

function getAsyncAttributes(context) {
    var attrs = context.attributes;
    return attrs.async || (attrs.async = {});
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
                asyncAttributes.deferred.resolve(this.context);
            }
        } catch (e) {
            asyncAttributes.deferred.reject(e);    // Something went wrong... make sure we always reject or resolve the promise
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

require('raptor-util').extend(require('./Context').prototype, {
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
            timeout = renderContext.DEFAULT_TIMEOUT;
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
    }
});