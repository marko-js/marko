'use strict';

var logger = require('raptor-logging').logger(module);
var asyncWriter = require('async-writer');
var AsyncValue = require('raptor-async/AsyncValue');
var isClientReorderSupported = require('./client-reorder').isSupported;

function isPromise(o) {
    return o && typeof o.then === 'function';
}

function promiseToCallback(promise, callback, thisObj) {
    if (callback) {
      var finalPromise = promise
        .then(function(data) {
          callback(null, data);
        });

      if (typeof promise.catch === 'function') {
        finalPromise = finalPromise.catch(function(err) {
          callback(err);
        });
      } else if (typeof promise.fail === 'function') {
        finalPromise = finalPromise.fail(function(err) {
          callback(err);
        });
      }

      if (finalPromise.done) {
        finalPromise.done();
      }
    }

    return promise;
}

function requestData(provider, args, callback, thisObj) {

    if (isPromise(provider)) {
        // promises don't support a scope so we can ignore thisObj
        promiseToCallback(provider, callback);
        return;
    }

    if (typeof provider === 'function') {
        var data = (provider.length === 1) ?
        // one argument so only provide callback to function call
        provider.call(thisObj, callback) :

        // two arguments so provide args and callback to function call
        provider.call(thisObj, args, callback);

        if (data !== undefined) {
            if (isPromise(data)) {
                promiseToCallback(data, callback);
            }
            else {
                callback(null, data);
            }
        }
    } else {
        // Assume the provider is a data object...
        callback(null, provider);
    }
}

module.exports = function render(input, out) {
    var dataProvider = input.dataProvider;
    var arg = input.arg || {};
    arg.out = out;
    var events = out.global.events;

    var clientReorder = isClientReorderSupported && input.clientReorder === true;
    var asyncOut;
    var done = false;
    var timeoutId = null;
    var name = input.name || input._name;
    var scope = input.scope || this;

    function renderBody(err, data, timeoutMessage) {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        done = true;

        var targetOut = asyncOut || out;

        events.emit('asyncFragmentBeforeRender', {
            clientReorder: clientReorder,
            out: targetOut,
            name: name
        });

        if (err) {
            if (input.errorMessage) {
                console.error('Async fragment (' + name + ') failed. Error:', (err.stack || err));
                targetOut.write(input.errorMessage);
            } else {
                targetOut.error(err);
            }
        } else if (timeoutMessage) {
            asyncOut.write(timeoutMessage);
        } else {
            if (input.renderBody) {
                input.renderBody(targetOut, data);
            }
        }

        if (!clientReorder) {
            events.emit('asyncFragmentFinish', {
                clientReorder: false,
                out: targetOut
            });
        }

        if (asyncOut) {
            asyncOut.end();

            // Only flush if we rendered asynchronously and we aren't using
            // client-reordering
            if (!clientReorder) {
                out.flush();
            }
        }
    }

    var method = input.method;
    if (method) {
        dataProvider = dataProvider[method].bind(dataProvider);
    }

    requestData(dataProvider, arg, renderBody, scope);

    if (!done) {
        var timeout = input.timeout;
        var timeoutMessage = input.timeoutMessage;

        if (timeout == null) {
            timeout = 10000;
        } else if (timeout <= 0) {
            timeout = null;
        }

        if (timeout != null) {
            timeoutId = setTimeout(function() {
                var message = 'Async fragment (' + name + ') timed out after ' + timeout + 'ms';

                if (timeoutMessage) {
                    logger.error(message);
                    renderBody(null, null, timeoutMessage);
                } else {
                    renderBody(new Error(message));
                }
            }, timeout);
        }

        if (clientReorder) {
            var asyncFragmentContext = out.global.__asyncFragments || (asyncFragmentContext = out.global.__asyncFragments = {
                fragments: [],
                nextId: 0
            });

            var id = input.name || asyncFragmentContext.nextId++;

            out.write('<span id="afph' + id + '">' + (input.placeholder || '') + '</span>');
            var asyncValue = new AsyncValue();

            // Write to an in-memory buffer
            asyncOut = asyncWriter.create(null, {global: out.global});

            asyncOut
                .on('finish', function() {
                    asyncValue.resolve(asyncOut.getOutput());
                })
                .on('error', function(err) {
                    asyncValue.reject(err);
                });

            var fragmentInfo = {
                id: id,
                asyncValue: asyncValue,
                out: asyncOut,
                after: input.showAfter
            };

            if (asyncFragmentContext.fragments) {
                asyncFragmentContext.fragments.push(fragmentInfo);
            } else {
                events.emit('asyncFragmentBegin', fragmentInfo);
            }

        } else {
            out.flush(); // Flush everything up to this async fragment
            asyncOut = out.beginAsync({
                timeout: 0, // We will use our code for controlling timeout
                name: name
            });
        }
    }
};
