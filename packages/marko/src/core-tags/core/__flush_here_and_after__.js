const BufferedWriter = require("../../runtime/html/BufferedWriter");

module.exports = function __flushHereAndAfter__(input, out) {
  let flushed = false;
  const asyncOut = out.beginAsync({ last: true });
  const nextWriter = out.writer;

  out.on("___toString", writer => {
    if (writer instanceof BufferedWriter) {
      if (flushed) {
        const detachedOut = out.createOut();
        detachedOut.sync();
        input.renderBody(detachedOut);
        writer._content = detachedOut.toString() + writer._content;
      } else if (writer.next === nextWriter) {
        asyncOut.sync();
        input.renderBody(asyncOut);
        asyncOut.end();
        flushed = true;
      }
    }
  });

  out.onLast(() => {
    if (!flushed) {
      asyncOut.sync();
      input.renderBody(asyncOut);
      asyncOut.end();
      flushed = true;
    }
  });
};
