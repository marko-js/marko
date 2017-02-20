var widgetArgsHelper = module.exports = function widgetArgsHelper(
        out,
        widgetArgs) {

    out.data.$w = widgetArgs;
};

widgetArgsHelper.cleanup = function(out) {
    delete out.data.$w;
};