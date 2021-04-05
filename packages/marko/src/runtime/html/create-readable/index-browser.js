var encoder = new TextEncoder();

module.exports = function (data) {
  // eslint-disable-next-line no-undef
  var transformStream = new TransformStream();
  var writer = transformStream.getWriter();
  var out = this.createOut(
    data && data.$global,
    {
      write: function (string) {
        writer.write(encoder.encode(string));
      },
      end: function () {
        writer.close();
      }
    },
    undefined,
    this.___shouldBuffer
  );
  this.render(data, out);
  out.end();

  return transformStream.readable;
};
