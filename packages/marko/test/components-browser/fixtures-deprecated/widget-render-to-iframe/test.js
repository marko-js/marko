var expect = require("chai").expect;

module.exports = function (helpers) {
  var widget = helpers.mount(require.resolve("./index"), {});

  // expect(widget.___host).to.exist;
  // expect(widget.___host).to.equal(document);

  var contentWidget = widget.renderIntoIframe();
  // expect(contentWidget.___host).to.equal(widget.getFrameEl().contentWindow.document);
  expect(contentWidget.getEl("input").value).to.equal("test");

  expect(contentWidget.getWidget("more").getValue()).to.equal("hello");
};
