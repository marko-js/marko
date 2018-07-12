require("./patch-module");
require("complain").log = function() {};
require("../../node-require").install({
    compilerOptions: { writeToDisk: false, autoKeyEnabled: false }
});
require("it-fails");
