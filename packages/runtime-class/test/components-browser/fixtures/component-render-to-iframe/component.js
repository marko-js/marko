var assert = require("assert/strict");
var iframeContentComponent = require("./components/app-iframe-content").default;

module.exports = {
  renderIntoIframe: function () {
    var frameEl = this.getEl("frame");
    return iframeContentComponent
      .renderSync({})
      .appendTo(frameEl.contentWindow.document.body)
      .getComponent();
  },

  test: function (helpers) {
    var contentComponent = this.renderIntoIframe();
    assert.equal(contentComponent.el.ownerDocument, this.getEl("frame").contentWindow.document);
    assert.equal(contentComponent.getEl("input").value, "test");
    assert.equal(contentComponent.getComponent("more").getValue(), "hello");

    var buttonClick = false;

    contentComponent.on("buttonClick", function () {
      buttonClick = true;
    });

    helpers.triggerMouseEvent(contentComponent.getEl("button"), "click");

    assert.equal(buttonClick, true);
  },
};
