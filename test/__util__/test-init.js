require("./patch-module");
require("../../node-require").install({
    compilerOptions: { writeToDisk: false },
    extensions: [".marko", ".html"]
});
require("it-fails");
