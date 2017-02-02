var widgetLookup = require('./util').$__widgetLookup;
var nextRepeatedId = require('./nextRepeatedId');
var repeatedRegExp = /\[\]$/;
var WidgetsContext = require('./WidgetsContext');
var registry = require('./registry');

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
    renderingLogic = renderingLogic || {};
    var onInput = renderingLogic.onInput;
    var typeName = widgetProps.type;
    var roots = widgetProps.roots;
    var assignedId = widgetProps.id;

    return function renderer(input, out) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on('beginAsync', handleBeginAsync);
        }

        var widget = outGlobal.$w;
        var isRerender = widget !== undefined;
        var id = assignedId;
        var isExisting;
        var customEvents;
        var scope;

        if (widget) {
            id = widget.id;
            isExisting = true;
            outGlobal.$w = null;
        } else {
            var widgetArgs = input && input.$w || out.data.$w;

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
        }

        var widgetsContext = WidgetsContext.$__getWidgetsContext(out);
        id = id || widgetsContext.$__nextWidgetId();

        if (registry.$__isServer) {
            widget = registry.$__createWidget(renderingLogic, id, input, out, typeName);
            input = widget.$__updatedInput;
            widget.$__updatedInput = undefined; // We don't want $__updatedInput to be serialized to the browser
        } else {
            if (!widget) {
                if (isRerender) {
                    // Look in in the DOM to see if a widget with the same ID and type already exists.
                    widget = widgetLookup[id];
                    if (widget && widget.$__type !== typeName) {
                        widget = undefined;
                    }
                }

                if (widget) {
                    isExisting = true;
                } else {
                    isExisting = false;
                    // We need to create a new instance of the widget
                    widget = registry.$__createWidget(typeName, id);
                }

                // Set this flag to prevent the widget from being queued for update
                // based on the new input. The widget is about to be rerendered
                // so we don't want to queue it up as a result of calling `setInput()`
                widget.$__updateQueued = true;

                if (!isExisting) {
                    widget.$__emitLifecycleEvent('create');
                }

                input = widget.$__setInput(input, onInput, out);

                if (isExisting) {
                    if (!widget.$__isDirty || !widget.shouldUpdate(input, widget.$__state)) {
                        preserveWidgetEls(widget, out, widgetsContext);
                        return;
                    }
                }
            }

            widget.$__emitLifecycleEvent('render', out);
        }

        var widgetDef = widgetsContext.$__beginWidget(widget);
        widgetDef.$__customEvents = customEvents;
        widgetDef.$__scope = scope;
        widgetDef.$__roots = roots;
        widgetDef.$__isExisting = isExisting;

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(input, out, widgetDef, widget.$__rawState);

        widgetDef.$__end();
    };
}

module.exports = createRendererFunc;

// exports used by the legacy renderer
createRendererFunc.$__resolveWidgetRef = resolveWidgetRef;
createRendererFunc.$__preserveWidgetEls = preserveWidgetEls;
createRendererFunc.$__handleBeginAsync = handleBeginAsync;
