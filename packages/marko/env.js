var isDebug = false;

var env = process.env || {};

if (env.MARKO_DEBUG != null) {
    isDebug = env.MARKO_DEBUG !== "false" && env.MARKO_DEBUG !== "0";
} else {
    var NODE_ENV = env.NODE_ENV;
    isDebug =
        NODE_ENV == null || NODE_ENV === "development" || NODE_ENV === "dev";
}

exports.isDebug = isDebug;
