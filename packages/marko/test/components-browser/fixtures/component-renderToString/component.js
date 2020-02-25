var helloComponent = require("./components/hello").default;

module.exports = {
  onMount: function() {
    this.renderedHtml = helloComponent.renderToString({
      name: this.input.name
    });
  }
};
