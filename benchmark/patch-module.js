var nodePath = require("path");

var Module = require("module").Module;
var oldResolveFilename = Module._resolveFilename;

var rootDir = nodePath.join(__dirname, "../");

Module._resolveFilename = function(request, parent, isMain) {
    if (request.charAt(0) !== ".") {
        var firstSlash = request.indexOf("/");
        var targetPackageName =
            firstSlash === -1 ? request : request.substring(0, firstSlash);

        if (targetPackageName === "marko") {
            request = request.substring("marko".length);
            request = rootDir + request;
        }
    }

    return oldResolveFilename.call(this, request, parent, isMain);
};
