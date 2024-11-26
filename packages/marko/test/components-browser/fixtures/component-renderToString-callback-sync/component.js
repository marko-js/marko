var helloComponent = require("./components/hello").default;

module.exports = {
  onMount: function () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var self = this;
    helloComponent.renderToString(
      {
        name: this.input.name,
      },
      function (error, html) {
        if (error) {
          self.emit("renderError", error);
        } else {
          self.emit("html", html);
        }
      },
    );
  },
};
