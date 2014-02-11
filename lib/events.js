var raptorWidgets = require('raptor-widgets');

require('raptor-pubsub').subscribe({
    'dom/beforeRemove': function (eventArgs) {
        var el = eventArgs.el;
        var widget = raptorWidgets.get(el.id);
        if (widget) {
            widget.destroy({
                removeNode: false,
                recursive: true
            });
        }
    },
    'raptor-renderer/renderedToDOM': function (eventArgs) {
        var context = eventArgs.context;
        var widgetsContext = raptorWidgets.getWidgetsContext(context);
        widgetsContext.initWidgets();
    }
});