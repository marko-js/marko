"use strict";

var escapeDoubleQuotes =
  require("../../../runtime/html/helpers/escape-quotes").___escapeDoubleQuotes;

module.exports = function (input, out) {
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

  /** SHOULD MATCH THE renderer.js IMPLEMENTATION */
  var reorderFunctionId =
    out.global.runtimeId !== "M" ? "af" + out.global.runtimeId : "af";

  var asyncOut = out.beginAsync({
    last: true,
    timeout: -1,
    name: "await-reorderer",
  });

  out.onLast(function (next) {
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
      let flushedScript = false;
      let flushedContent = false;
      let flushedPlaceholder = false;
      awaitInfo.parent.on("___toString", () => {
        flushedPlaceholder = true;
        if (!flushedScript && flushedContent) {
          flushedScript = true;
          asyncOut.script(
            `$${reorderFunctionId}(` +
              (typeof awaitInfo.id === "number"
                ? awaitInfo.id
                : '"' + awaitInfo.id + '"') +
              (awaitInfo.after ? ',"' + awaitInfo.after + '"' : "") +
              ")",
          );
        }
      });
      awaitInfo.out
        .on("___toString", out.emit.bind(out, "___toString"))
        .on("finish", function (result) {
          flushedContent = true;
          if (!global._afRuntime) {
            // Minified version of ./client-reorder-runtime.js
            asyncOut.script(
              `function $${reorderFunctionId}(d,a,e,l,g,h,k,b,f,c){c=$${reorderFunctionId};if(a&&!c[a])(c[a+="$"]||(c[a]=[])).push(d);else{e=document;l=e.getElementById("${reorderFunctionId}"+d);g=e.getElementById("${reorderFunctionId}ph"+d);h=e.createDocumentFragment();k=l.childNodes;b=0;for(f=k.length;b<f;b++)h.appendChild(k.item(0));g&&g.parentNode.replaceChild(h,g);c[d]=1;if(a=c[d+"$"])for(b=0,f=a.length;b<f;b++)c(a[b])}}`,
            );
            global._afRuntime = true;
          }

          if (global.cspNonce) {
            asyncOut.write(
              '<style nonce="' +
                escapeDoubleQuotes(global.cspNonce) +
                '">' +
                `#${reorderFunctionId}` +
                awaitInfo.id +
                "{display:none;}" +
                "</style>" +
                `<div id="${reorderFunctionId}` +
                awaitInfo.id +
                '">' +
                result.toString() +
                "</div>",
            );
          } else {
            asyncOut.write(
              `<div id="${reorderFunctionId}` +
                awaitInfo.id +
                '" style="display:none">' +
                result.toString() +
                "</div>",
            );
          }

          if (!flushedScript && flushedPlaceholder) {
            flushedScript = true;
            asyncOut.script(
              `$${reorderFunctionId}(` +
                (typeof awaitInfo.id === "number"
                  ? awaitInfo.id
                  : '"' + awaitInfo.id + '"') +
                (awaitInfo.after ? ',"' + awaitInfo.after + '"' : "") +
                ")",
            );
          }

          awaitInfo.out.writer = asyncOut.writer;

          out.emit("await:finish", awaitInfo);

          out.flush();

          if (--remaining === 0) {
            asyncOut.end();
            next();
          }
        })
        .on("error", function (err) {
          asyncOut.error(err);
        });
    }

    awaitContext.instances.forEach(handleAwait);

    out.on("await:clientReorder", function (awaitInfo) {
      remaining++;
      handleAwait(awaitInfo);
    });

    // Now that we have a listener attached, we want to receive any additional
    // out-of-sync instances via an event
    delete awaitContext.instances;
  });
};
