'use strict';

var AsyncValue = require('raptor-async/AsyncValue');
var isClientReorderSupported = require('./client-reorder').isSupported;
var nextTick = require('../../runtime/nextTick');

function isPromise(o) {
    return o && typeof o.then === 'function';
}

function safeRenderBody(renderBody, targetOut, data) {
    try {
        renderBody(targetOut, data);
    } catch(err) {
        return err;
    }
}

function promiseToCallback(promise, callback, thisObj) {
    if (callback) {
        var finalPromise = promise
            .then(function(data) {
                nextTick(callback.bind(this, null, data));
            })
            .then(null, function(err) {
                nextTick(callback.bind(this, err));
            });

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

module.exports = function awaitTag(input, out) {
    var dataProvider = input._dataProvider;
    var arg = input.arg || {};
    arg.out = out;

    var clientReorder = isClientReorderSupported && input.clientReorder === true && !out.isVDOM;
    var asyncOut;
    var timeoutId = null;
    var name = input.name || input._name;
    var scope = input.scope || this;
    var method = input.method;

    if (method) {
        dataProvider = dataProvider[method].bind(dataProvider);
    }

    var awaitInfo = {
        name: name,
        clientReorder: clientReorder,
        dataProvider: dataProvider
    };

    var beforeRenderEmitted = false;

    out.emit('await:begin', awaitInfo);

    function renderBody(err, data, renderTimeout) {
        if (awaitInfo.finished) return;

        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        var targetOut = awaitInfo.out = asyncOut || out;

        if (!beforeRenderEmitted) {
            beforeRenderEmitted = true;
            out.emit('await:beforeRender', awaitInfo);
        }

        if (err) {
            if (input.renderError) {
                console.error('Await (' + name + ') failed. Error:', (err.stack || err));
                input.renderError(targetOut);
            } else {
                targetOut.error(err);
            }
        } else if (renderTimeout) {
            renderTimeout(targetOut);
        } else {
            var renderBodyFunc = input.renderBody;
            if (renderBodyFunc) {
                var renderBodyErr = safeRenderBody(renderBodyFunc, targetOut, data);
                if (renderBodyErr) {
                    return renderBody(renderBodyErr);
                }
            }
        }

        awaitInfo.finished = true;

        if (!clientReorder) {
            out.emit('await:finish', awaitInfo);
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

    requestData(dataProvider, arg, renderBody, scope);

    if (!awaitInfo.finished) {
        var timeout = input.timeout;
        var renderTimeout = input.renderTimeout;
        var renderPlaceholder = input.renderPlaceholder;

        if (timeout == null) {
            timeout = 10000;
        } else if (timeout <= 0) {
            timeout = null;
        }

        if (timeout != null) {
            timeoutId = setTimeout(function() {
                var message = 'Await (' + name + ') timed out after ' + timeout + 'ms';

                awaitInfo.timedout = true;

                if (renderTimeout) {
                    console.error(message);
                    renderBody(null, null, renderTimeout);
                } else {
                    renderBody(new Error(message));
                }
            }, timeout);
        }

        if (clientReorder) {
            var awaitContext = out.global.__awaitContext || (awaitContext = out.global.__awaitContext = {
                instances: [],
                nextId: 0
            });

            var id = awaitInfo.id = input.name || (awaitContext.nextId++);
            var placeholderIdAttrValue = 'afph' + id;

            if (renderPlaceholder) {
                out.write('<span id="' + placeholderIdAttrValue + '">');
                renderPlaceholder(out);
                out.write('</span>');
            } else {
                out.write('<noscript id="' + placeholderIdAttrValue + '"></noscript>');
            }

            var asyncValue = awaitInfo.asyncValue = new AsyncValue();

            // If `client-reorder` is enabled then we asynchronously render the await instance to a new
            // AsyncWriter instance so that we can Write to a temporary in-memory buffer.
            asyncOut = awaitInfo.out = out.createOut();

            awaitInfo.after = input.showAfter;

            var oldEmit = asyncOut.emit;

            // Since we are rendering the await instance to a new and separate out,
            // we want to proxy any child events to the main AsyncWriter in case anyone is interested
            // in those events. This is also needed for the following events to be handled correctly:
            //
            // - await:begin
            // - await:beforeRender
            // - await:finish
            //
            asyncOut.emit = function(event) {
                if (event !== 'finish' && event !== 'error') {
                    // We don't want to proxy the finish and error events since those are
                    // very specific to the AsyncWriter associated with the await instance
                    out.emit.apply(out, arguments);
                }

                oldEmit.apply(asyncOut, arguments);
            };

            asyncOut
                .on('finish', function(result) {
                    asyncValue.resolve(result.getOutput());
                })
                .on('error', function(err) {
                    asyncValue.reject(err);
                });

            if (awaitContext.instances) {
                awaitContext.instances.push(awaitInfo);
            }

            out.emit('await:clientReorder', awaitInfo);
        } else {
            out.flush(); // Flush everything up to this await instance
            asyncOut = awaitInfo.out = out.beginAsync({
                timeout: 0, // We will use our code for controlling timeout
                name: name
            });
        }
    } else if (clientReorder) {
        // If the async fragment has finished synchronously then we still need to emit the `await:finish` event
        out.emit('await:finish', awaitInfo);
    }
};
