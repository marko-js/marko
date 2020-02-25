require("./patch-module");
require("../../node-require").install({
  extensions: [".marko", ".html"]
});
require("it-fails");
