var stream = require("stream");

var OutgoingMessageProto = require("http").OutgoingMessage.prototype;
if (String(OutgoingMessageProto.flush).indexOf("deprecated") !== -1) {
  // Yes, we are monkey-patching http. This method should never have been added and it was introduced on
  // the iojs fork. It was quickly deprecated and I'm 99% sure no one is actually using it.
  // See:
  // - https://github.com/marko-js/async-writer/issues/3
  // - https://github.com/nodejs/node/issues/2920
  //
  // This method causes problems since marko looks for the flush method and calls it found.
  // The `res.flush()` method is introduced by the [compression](https://www.npmjs.com/package/compression)
  // middleware, but, otherwise, it should typically not exist.
  delete OutgoingMessageProto.flush;
}

class Readable extends stream.Readable {
  constructor(template, data) {
    super();
    this.___template = template;
    this.___data = data;
    this.___rendered = false;
  }

  write(data) {
    if (data != null) {
      this.push(data);
    }
  }

  end() {
    this.push(null);
  }

  _read() {
    if (this.___rendered) {
      return;
    }

    this.___rendered = true;
    var template = this.___template;
    var data = this.___data;
    var globalData = data && data.$global;
    var out = this.___template.createOut(
      globalData,
      this,
      undefined,
      template.___shouldBuffer
    );
    template.render(data, out);
    out.end();
  }
}

module.exports = function (data) {
  return new Readable(this, data);
};
