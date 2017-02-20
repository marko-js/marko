var componentArgsHelper = module.exports = function componentArgsHelper(
        out,
        componentArgs) {

    out.data.$w = componentArgs;
};

componentArgsHelper.cleanup = function(out) {
    delete out.data.$w;
};