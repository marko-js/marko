var myTextNodeComponent = require("./components/my-text-node").default;

module.exports = {
  onMount: function () {
    this.renderedHtml = myTextNodeComponent.renderToString();
  },
};
