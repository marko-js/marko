var encoder = new TextEncoder();
var noop = function () {};

module.exports = function (data) {
  // eslint-disable-next-line no-undef
  var transformStream = new TransformStream();
  var writer = transformStream.writable.getWriter();
  var facade = {
    write: function (string) {
      writer.write(encoder.encode(string));
    },
    end: function () {
      writer.close();
    }
  };
  var out = this.createOut(
    data && data.$global,
    facade,
    undefined,
    this.___shouldBuffer
  );
  out.once("error", err => {
    facade.write = facade.end = noop;
    writer.abort(err);
  });
  this.render(data, out);
  out.end();

  return transformStream.readable;
};
