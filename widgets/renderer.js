var widgetLookup = require('./util').$__widgetLookup;
var nextRepeatedId = require('./nextRepeatedId');
var repeatedRegExp = /\[\]$/;
var WidgetsContext = require('./WidgetsContext');

var WIDGETS_BEGIN_ASYNC_ADDED_KEY = '$wa';

function resolveWidgetRef(out, ref, scope) {
    if (ref.charAt(0) === '#') {
        return ref.substring(1);
    } else {
        var resolvedId;

        if (repeatedRegExp.test(ref)) {
            resolvedId = nextRepeatedId(out, scope, ref);
        } else {
            resolvedId = scope + '-' + ref;
        }

        return resolvedId;
    }
}

function preserveWidgetEls(existingWidget, out, widgetsContext) {
    var rootEls = existingWidget.$__getRootEls({});

    for (var elId in rootEls) {
        var el = rootEls[elId];

        // We put a placeholder element in the output stream to ensure that the existing
        // DOM node is matched up correctly when using morphdom.
        out.element(el.tagName, { id: elId });

        widgetsContext.$__preserveDOMNode(elId); // Mark the element as being preserved (for morphdom)
    }

    existingWidget.$__reset(); // The widget is no longer dirty so reset internal flags
    return true;
}

function handleBeginAsync(event) {
    var parentOut = event.parentOut;
    var asyncOut = event.out;
    var widgetsContext = asyncOut.global.widgets;
    var widgetStack;

    if (widgetsContext && (widgetStack = widgetsContext.$__widgetStack)) {
        // All of the widgets in this async block should be
        // initialized after the widgets in the parent. Therefore,
        // we will create a new WidgetsContext for the nested
        // async block and will create a new widget stack where the current
        // widget in the parent block is the only widget in the nested
        // stack (to begin with). This will result in top-level widgets
        // of the async block being added as children of the widget in the
        // parent block.
        var nestedWidgetsContext = new WidgetsContext(asyncOut, widgetStack[widgetStack.length-1]);
        asyncOut.data.widgets = nestedWidgetsContext;
    }
    asyncOut.data.$w = parentOut.data.$w;
}

function createRendererFunc(templateRenderFunc, widgetProps, renderingLogic) {
    var onInput = renderingLogic && renderingLogic.onInput;
    var typeName = widgetProps.type;
    var roots = widgetProps.roots;
    var assignedId = widgetProps.id;

    return function renderer(input, out) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on('beginAsync', handleBeginAsync);
        }

        var widgetConfig;
        var widgetBody;
        var widgetState; // This is the pending widget state that needs to be assigned to the new widget
        var finalWidgetState; // This is the final widget state

        var rootRerenderWidget = outGlobal.$w;
        var isRerender = rootRerenderWidget !== undefined;

        if (rootRerenderWidget) {
            outGlobal.$w = null;
        } else if (!input) {
            // Make sure we always have a non-null input object
            input = {};
        }

        var widgetArgs = input && input.$w || out.data.$w;
        var customEvents;
        var scope;

        var id = assignedId;

        if (widgetArgs) {
            scope = widgetArgs[0];

            if (scope) {
                scope = scope.id;
            }

            var ref = widgetArgs[1];
            if (ref != null) {
                ref = ref.toString();
            }
            id = id || resolveWidgetRef(out, ref, scope);
            customEvents = widgetArgs[2];
            delete input.$w;
        }

        var widgetsContext = WidgetsContext.$__getWidgetsContext(out);

        id = id || widgetsContext.$__nextWidgetId();

        var existingWidget;

        if (rootRerenderWidget) {
            existingWidget = rootRerenderWidget;
            id = rootRerenderWidget.id;
        } else if (isRerender) {
            // Look in in the DOM to see if a widget with the same ID and type already exists.
            existingWidget = widgetLookup[id];
            if (existingWidget && existingWidget.$__type !== typeName) {
                existingWidget = undefined;
            }
        }

        if (input) {
            if (onInput) {
                var updatedInput;
                if (existingWidget) {
                    updatedInput = existingWidget.onInput(input, out);
                } else {
                    var lightweightWidget = Object.create(renderingLogic);
                    updatedInput = lightweightWidget.onInput(input, out);
                    widgetState = finalWidgetState = lightweightWidget.state;
                    widgetConfig = lightweightWidget;
                    delete widgetConfig.state;
                }
                input = updatedInput === undefined ? input : updatedInput;
            }
            // Default to using the nested content as the widget body
            widgetBody = input.renderBody;
        }

        if (existingWidget) {
            var existingState = existingWidget.$__state;

            if (!widgetState) {
                finalWidgetState = existingState && existingState.$__raw;
            }

            if (!rootRerenderWidget) {
                // This is a nested widget found during a rerender. We don't want to needlessly
                // rerender the widget if that is not necessary. If the widget is a stateful
                // widget then we update the existing widget with the new state.
                var shouldPreserve = existingState && !widgetBody && !existingWidget.$__isDirty;

                // If the widget is not dirty (no state changes) and shouldUpdate() returns false
                // then skip rerendering the widget.
                if (shouldPreserve || !existingWidget.shouldUpdate(input, finalWidgetState)) {
                    preserveWidgetEls(existingWidget, out, widgetsContext);
                    return;
                }
            }
        }

        var templateInput = input ||
            (existingWidget && existingWidget.input) ||
            (rootRerenderWidget && rootRerenderWidget.input) ||
            {};

        if (existingWidget) {
            existingWidget.$__emitLifecycleEvent('beforeUpdate');
            existingWidget.input = templateInput;
        }

        var widgetDef = widgetsContext.$__beginWidget(id);
        widgetDef.$__type = typeName;
        widgetDef.$__input = templateInput;
        widgetDef.$__state = widgetState;
        widgetDef.$__config = widgetConfig;
        widgetDef.$__customEvents = customEvents;
        widgetDef.$__scope = scope;
        widgetDef.$__existingWidget = existingWidget;
        widgetDef.$__roots = roots;
        widgetDef.b = widgetBody;

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(templateInput, out, widgetDef, finalWidgetState);

        widgetDef.$__end();
    };
}

module.exports = createRendererFunc;

// exports used by the legacy renderer
createRendererFunc.$__resolveWidgetRef = resolveWidgetRef;
createRendererFunc.$__preserveWidgetEls = preserveWidgetEls;
createRendererFunc.$__handleBeginAsync = handleBeginAsync;