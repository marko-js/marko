"use strict";

function forceScriptTagAtThisPoint(out) {
  const writer = out.writer;

  out.global.___isLastFlush = true;
  const htmlSoFar = writer.toString();
  out.global.___isLastFlush = undefined;

  writer.clear();
  writer.write(htmlSoFar);
}

module.exports = function render(input, out) {
  if (out.isSync() === true) {
    forceScriptTagAtThisPoint(out);
  } else {
    const asyncOut = out.beginAsync({ last: true, timeout: -1 });
    out.onLast(function (next) {
      forceScriptTagAtThisPoint(asyncOut);
      asyncOut.end();
      next();
    });
  }
};
