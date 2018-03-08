"use strict";
var isClientReorderSupported = require("./client-reorder").isSupported;
var AsyncValue = require("./AsyncValue");

function safeRenderBody(renderBody, targetOut, data) {
    try {
        renderBody(targetOut, data);
    } catch (err) {
        return err;
    }
}

function requestData(provider, args, thisObj, timeout) {
    var asyncValue = new AsyncValue();

    if (typeof provider === "function") {
        var callback = function(err, data) {
            if (err) {
                asyncValue.___reject(err);
            } else {
                asyncValue.___resolve(data);
            }
        };

        var value =
            provider.length === 1
                ? // one argument so only provide callback to function call
                  provider.call(thisObj, callback)
                : // two arguments so provide args and callback to function call
                  provider.call(thisObj, args, callback);

        if (value !== undefined) {
            asyncValue.___resolve(value);
        }
    } else {
        // Assume the provider is a data object...
        asyncValue.___resolve(provider);
    }

    if (timeout == null) {
        timeout = 10000;
    }

    if (timeout > 0) {
        let timeoutId = setTimeout(function() {
            timeoutId = null;
            var error = new Error("Timed out after " + timeout + "ms");
            error.code = "ERR_AWAIT_TIMEDOUT";
            asyncValue.___reject(error);
        }, timeout);

        asyncValue.___done(function() {
            if (timeoutId != null) {
                clearTimeout(timeoutId);
            }
        });
    }

    return asyncValue;
}

const LAST_OPTIONS = { last: true, name: "await:finish" };

module.exports = function awaitTag(input, out) {
    var arg = input.arg || {};
    arg.out = out;

    var clientReorder =
        isClientReorderSupported && input.clientReorder === true && !out.isVDOM;

    var name = input.name || input._name;
    var scope = input.scope || this;
    var method = input.method;
    var timeout = input.timeout;
    var dataProvider = input._dataProvider;
    if (method) {
        dataProvider = dataProvider[method].bind(dataProvider);
    }

    var asyncValue = requestData(dataProvider, arg, scope, timeout);

    if (asyncValue.___settled) {
        // No point in using client-reordering if the data was fetched
        // synchronously
        clientReorder = false;
    }

    var asyncOut;
    var clientReorderContext;

    var awaitInfo = {
        name: name,
        clientReorder: clientReorder,
        dataProvider: dataProvider
    };

    if (clientReorder) {
        awaitInfo.after = input.showAfter;

        clientReorderContext =
            out.global.___clientReorderContext ||
            (out.global.___clientReorderContext = {
                instances: [],
                nextId: 0
            });

        var id = (awaitInfo.id = input.name || clientReorderContext.nextId++);
        var placeholderIdAttrValue = "afph" + id;

        if (input.renderPlaceholder) {
            out.write('<span id="' + placeholderIdAttrValue + '">');
            input.renderPlaceholder(out);
            out.write("</span>");
        } else {
            out.write(
                '<noscript id="' + placeholderIdAttrValue + '"></noscript>'
            );
        }

        // If `client-reorder` is enabled then we asynchronously render the await instance to a new
        // "out" instance so that we can Write to a temporary in-memory buffer.
        asyncOut = awaitInfo.out = out.createOut();

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
            if (event !== "finish" && event !== "error") {
                // We don't want to proxy the finish and error events since those are
                // very specific to the AsyncWriter associated with the await instance
                out.emit.apply(out, arguments);
            }

            oldEmit.apply(asyncOut, arguments);
        };

        if (clientReorderContext.instances) {
            clientReorderContext.instances.push(awaitInfo);
        }

        out.emit("await:clientReorder", awaitInfo);
    } else {
        asyncOut = awaitInfo.out = out.beginAsync({
            timeout: 0, // We will use our code for controlling timeout
            name: name
        });
    }

    var beforeRenderEmitted = false;

    out.emit("await:begin", awaitInfo);

    function renderBody(err, data) {
        if (awaitInfo.finished) {
            return;
        }

        if (err) {
            awaitInfo.error = err;
        }

        if (!beforeRenderEmitted) {
            beforeRenderEmitted = true;
            out.emit("await:beforeRender", awaitInfo);
        }

        if (err) {
            if (err.code === "ERR_AWAIT_TIMEDOUT" && input.renderTimeout) {
                input.renderTimeout(asyncOut);
            } else if (input.renderError) {
                // eslint-disable-next-line no-console
                console.error(
                    "Await (" + name + ") failed. Error:",
                    err.stack || err
                );
                input.renderError(asyncOut);
            } else {
                asyncOut.error(err);
            }
        } else {
            var renderBodyFunc = input.renderBody;
            if (renderBodyFunc) {
                var renderBodyErr = safeRenderBody(
                    renderBodyFunc,
                    asyncOut,
                    data
                );
                if (renderBodyErr) {
                    return renderBody(renderBodyErr);
                }
            }
        }

        awaitInfo.finished = true;

        if (clientReorder) {
            asyncOut.end();
            out.flush();
        } else {
            // When using client reordering we want to delay
            // this event until after the code to move
            // the async fragment into place has been written
            let asyncLastOut = asyncOut.beginAsync(LAST_OPTIONS);
            asyncOut.onLast(function() {
                var oldWriter = asyncOut.writer;
                // We swap out the writer so that writing will happen to our `asyncLastOut`
                // even though we are still passing along the original `asyncOut`. We have
                // to pass along the original `asyncOut` because that has contextual
                // information (such as the rendered UI components)
                asyncOut.writer = asyncLastOut.writer;
                out.emit("await:finish", awaitInfo);
                asyncOut.writer = oldWriter;
                asyncLastOut.end();
                out.flush();
            });

            asyncOut.end();
        }
    }

    asyncValue.___done(renderBody);
};
