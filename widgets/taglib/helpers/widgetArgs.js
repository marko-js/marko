var widgetArgsHelper = module.exports = function widgetArgsHelper(
        out,
        scope,
        assignedId,
        customEvents) {

    var data = out.data;
    var widgetArgs = data.widgetArgs;
    var id;

    if (!widgetArgs) {
        if (assignedId != null) {
            id = assignedId.toString();
        }

        widgetArgs = data.widgetArgs = {
            out: out,
            id: id,
            scope: scope,
            customEvents: customEvents
        };
    }
};

widgetArgsHelper.cleanup = function(out) {
    delete out.data.widgetArgs;
};