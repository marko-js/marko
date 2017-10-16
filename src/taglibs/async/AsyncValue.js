var nextTick = require('../../runtime/nextTick');

function AsyncValue(options) {
    /**
     * The data that was provided via call to resolve(data).
     * This property is assumed to be public and available for inspection.
     */
    this.___value = undefined;

    /**
     * The data that was provided via call to reject(err)
     * This property is assumed to be public and available for inspection.
     */
    this.___error = undefined;

    /**
     * The queue of callbacks that are waiting for data
     */
    this.___callbacks = undefined;

    /**
     * The state of the data holder (STATE_INITIAL, STATE_RESOLVED, or STATE_REJECTED)
     */
    this.___settled = false;
}

function notifyCallbacks(asyncValue, err, value) {
    var callbacks = asyncValue.___callbacks;
    if (callbacks) {
        // clear out the registered callbacks (we still have reference to the original value)
        asyncValue.___callbacks = undefined;

        // invoke all of the callbacks and use their scope
        for (var i = 0; i < callbacks.length; i++) {
            // each callback is actually an object with "scope and "callback" properties
            var callback = callbacks[i];
            callback(err, value);
        }
    }
}

AsyncValue.prototype = {
    /**
     * Adds a callback to the queue. If there is not a pending request to load data
     * and we have a "loader" then we will use that loader to request the data.
     * The given callback will be invoked when there is an error or resolved data
     * available.
     */
    ___done: function(callback) {

        // Do we already have data or error?
        if (this.___settled) {
            // invoke the callback immediately
            return callback(this.___error, this.___value);
        }

        var callbacks = this.___callbacks || (this.___callbacks = []);
        callbacks.push(callback);
    },

    /**
     * This method will trigger any callbacks to be notified of rejection (error).
     * If this data holder has a loader then the data holder will be returned to
     * its initial state so that any future requests to load data will trigger a
     * new load call.
     */
    ___reject: function(err) {
        if (this.___settled) {
            return;
        }

        // remember the error
        this.___error = err;

        // Go to the rejected state if we don't have a loader.
        // If we do have a loader then return to the initial state
        // (we do this so that next call to done() will trigger load
        // again in case the error was transient).
        this.___settled = true;

        // always notify callbacks regardless of whether or not we return to the initial state
        notifyCallbacks(this, err, null);
    },

    /**
     * This method will trigger any callbacks to be notified of data.
     */
    ___resolve: function (value) {
        if (this.___settled) {
            return;
        }

        if (value && typeof value.then === 'function') {
            var asyncValue = this;

            var finalPromise = value
                .then(
                    function onFulfilled(value) {
                        nextTick(asyncValue.___resolve.bind(asyncValue, value));
                    },
                    function onRejected(err) {
                        nextTick(asyncValue.___reject.bind(asyncValue, err));
                    });

            if (finalPromise.done) {
                finalPromise.done();
            }
        } else {
            // remember the state
            this.___value = value;

            // go to the resolved state
            this.___settled = true;

            // notify callbacks
            notifyCallbacks(this, null, value);
        }
    }
};

module.exports = AsyncValue;
