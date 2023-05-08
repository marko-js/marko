"use strict";

const immediate = require("@internal/set-immediate");
const setImmediate = immediate.___setImmediate;
const clearImmediate = immediate.___clearImmediate;
const StringWriter = require("./StringWriter");

/**
 * Simple wrapper that can be used to wrap a stream
 * to reduce the number of write calls. In Node.js world,
 * each stream.write() becomes a chunk. We can avoid overhead
 * by reducing the number of chunks by buffering the output.
 */
function BufferedWriter(wrappedStream) {
  StringWriter.call(this);
  this._wrapped = wrappedStream;
  this._scheduled = null;
}

BufferedWriter.prototype = Object.assign(
  {
    scheduleFlush() {
      if (!this._scheduled) {
        this._scheduled = setImmediate(flush.bind(0, this));
      }
    },

    end: function () {
      flush(this);
      if (!this._wrapped.isTTY) {
        this._wrapped.end();
      }
    }
  },
  StringWriter.prototype
);

function flush(writer) {
  const contents = writer.toString();
  if (contents.length !== 0) {
    writer._wrapped.write(contents);
    writer.clear();
    if (writer._wrapped.flush) {
      writer._wrapped.flush();
    }
  }

  clearImmediate(writer._scheduled);
  writer._scheduled = null;
}

module.exports = BufferedWriter;
