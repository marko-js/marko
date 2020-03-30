"use strict";

function forceScriptTagAtThisPoint(out) {
  out.global.___isLastFlush = true;

  const writer = out.writer;
  const htmlSoFar = writer.toString();

  writer.clear();
  writer.write(htmlSoFar);

  out.global.___isLastFlush = undefined;
}

module.exports = function render(input, out) {
  if (out.isSync() === true) {
    forceScriptTagAtThisPoint(out);
  } else {
    const asyncOut = out.beginAsync({ last: true, timeout: -1 });
    out.onLast(function(next) {
      forceScriptTagAtThisPoint(asyncOut);
      asyncOut.end();
      next();
    });
  }
};
