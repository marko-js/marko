"use strict";
var complain = "MARKO_DEBUG" && require("complain");
var AsyncValue = require("./AsyncValue");

function safeRenderBody(renderBody, targetOut, data) {
  try {
    renderBody(targetOut, data);
  } catch (err) {
    return err;
  }
}

function requestData(provider, timeout) {
  var asyncValue = new AsyncValue();

  if (typeof provider === "function") {
    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
      complain(
        "Passing a callback function to the <await> tag has been deprecated, please use a promise instead.",
        { level: 1, locationIndex: 3 }
      );
    }

    var callback = function (err, data) {
      if (err) {
        asyncValue.___reject(err);
      } else {
        asyncValue.___resolve(data);
      }
    };

    var value =
      provider.length === 1
        ? // one argument so only provide callback to function call
          provider(callback)
        : // two arguments so provide args and callback to function call
          provider(null, callback);

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

  var error;
  var errorMsg = "Timed out after " + timeout + "ms";
  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    // Make sure we have a meaningful stack trace in development preparing the stacktrace upfront.
    // If we create it inside the setTimeout, we will end up with a short, not meaningful, stack trace
    // We only do it in development to avoid overhead in production
    error = new Error(errorMsg);
  }
  if (timeout > 0) {
    let timeoutId = setTimeout(function () {
      timeoutId = null;
      if (!error) error = new Error(errorMsg);
      error.code = "ERR_AWAIT_TIMEDOUT";
      error.name = "TimeoutError";
      asyncValue.___reject(error);
    }, timeout);

    asyncValue.___done(function () {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
    });
  }

  return asyncValue;
}

const LAST_OPTIONS = { last: true, name: "await:finish" };

module.exports = function awaitTag(input, out) {
  var clientReorder =
    typeof document === "undefined" &&
    input.clientReorder === true &&
    !out.isVDOM;

  var name = input.name || input._name;
  var timeout = input.timeout;
  var provider = input._provider;
  var asyncValue = requestData(provider, timeout);
  var placeholderRenderer = input.placeholder && input.placeholder.renderBody;

  if (asyncValue.___settled) {
    renderContents(asyncValue.___error, asyncValue.___value, input, out);
    return;
  }

  var asyncOut;
  var clientReorderContext;

  var awaitInfo = {
    name: name,
    clientReorder: clientReorder,
    dataProvider: provider
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

    if (placeholderRenderer) {
      out.write('<span id="' + placeholderIdAttrValue + '">');
      placeholderRenderer(out);
      out.write("</span>");
    } else {
      out.write('<noscript id="' + placeholderIdAttrValue + '"></noscript>');
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
    asyncOut.emit = function (event) {
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
    out.flush(); // Flush everything up to this await instance
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

    renderContents(err, data, input, asyncOut);

    awaitInfo.finished = true;

    if (clientReorder) {
      asyncOut.end();
      out.flush();
    } else {
      // When using client reordering we want to delay
      // this event until after the code to move
      // the async fragment into place has been written
      let asyncLastOut = asyncOut.beginAsync(LAST_OPTIONS);
      asyncOut.onLast(function () {
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

function renderContents(err, data, input, out) {
  var resultRenderer = input.then && input.then.renderBody;
  var errorRenderer = input.catch && input.catch.renderBody;

  if (err) {
    if (input.catch) {
      if (errorRenderer) {
        errorRenderer(out, err);
      }
    } else {
      out.error(err);
    }
  } else {
    if (resultRenderer) {
      var renderBodyErr = safeRenderBody(resultRenderer, out, data);

      if (renderBodyErr) {
        return renderContents(renderBodyErr, data, input, out);
      }
    }
  }
}
