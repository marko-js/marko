"use strict";

const clientReorder = require("./client-reorder");

module.exports = function(input, out) {
  // We cannot call beginSync() when using renderSync(). In this case we will
  // ignore the await-reorderer tag.
  if (out.isSync()) {
    return;
  }

  var global = out.global;

  // We have already invoked an <await-reorderer>. We do not need to do this
  // work again.
  if (global.__awaitReordererInvoked) {
    return;
  }

  global.__awaitReordererInvoked = true;

  if (out.global.___clientReorderContext) {
    out.flush();
  }

  var asyncOut = out.beginAsync({
    last: true,
    timeout: -1,
    name: "await-reorderer"
  });

  out.onLast(function(next) {
    var awaitContext = global.___clientReorderContext;
    var remaining;

    // Validate that we have remaining <await> instances that need handled
    if (
      !awaitContext ||
      !awaitContext.instances ||
      !(remaining = awaitContext.instances.length)
    ) {
      asyncOut.end();
      next();
      return;
    }

    function handleAwait(awaitInfo) {
      awaitInfo.out
        .on("___toString", out.emit.bind(out, "___toString"))
        .on("finish", function(result) {
          if (!global._afRuntime) {
            asyncOut.script(clientReorder.getCode());
            global._afRuntime = true;
          }

          asyncOut.write(
            '<div id="af' +
              awaitInfo.id +
              '" style="display:none">' +
              result.toString() +
              "</div>"
          );

          asyncOut.script(
            "$af(" +
              (typeof awaitInfo.id === "number"
                ? awaitInfo.id
                : '"' + awaitInfo.id + '"') +
              (awaitInfo.after ? ',"' + awaitInfo.after + '"' : "") +
              ")"
          );

          awaitInfo.out.writer = asyncOut.writer;

          out.emit("await:finish", awaitInfo);

          out.flush();

          if (--remaining === 0) {
            asyncOut.end();
            next();
          }
        })
        .on("error", function(err) {
          asyncOut.error(err);
        });
    }

    awaitContext.instances.forEach(handleAwait);

    out.on("await:clientReorder", function(awaitInfo) {
      remaining++;
      handleAwait(awaitInfo);
    });

    // Now that we have a listener attached, we want to receive any additional
    // out-of-sync instances via an event
    delete awaitContext.instances;
  });
};
