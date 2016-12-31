var widgetLookup = require('./util').$__widgetLookup;
var nextRepeatedId = require('./nextRepeatedId');
var repeatedRegExp = /\[\]$/;
var WidgetsContext = require('./WidgetsContext');

var RERENDER_WIDGET_INDEX = 0;
var RERENDER_WIDGET_STATE_INDEX = 1;

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

module.exports = function createRendererFunc(templateRenderFunc, widgetProps, renderingLogic) {
    var onInput;
    var getInitialProps;
    var getTemplateData;
    var getInitialState;
    var getWidgetConfig;
    var getInitialBody;

    function initRendereringLogic() {
        onInput = renderingLogic.onInput;
        getInitialProps = renderingLogic.getInitialProps; //deprecate
        getTemplateData = renderingLogic.getTemplateData;
        getInitialState = renderingLogic.getInitialState; //deprecate
        getWidgetConfig = renderingLogic.getWidgetConfig; //deprecate
        getInitialBody = renderingLogic.getInitialBody;
    }

    if (renderingLogic) {
        initRendereringLogic();
    }

    var typeName = widgetProps.type;
    var roots = widgetProps.roots;
    var assignedId = widgetProps.id;

    return function renderer(input, out, renderingLogicLegacy /* needed by defineRenderer */) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on('beginAsync', handleBeginAsync);
        }

        if (renderingLogic === undefined) {
            // LEGACY - This should be removed when `defineRenderer` is removed but we use it
            // now to run the rendering logic that is passed in at render time. The reason we don't
            // get the rendering logic until now is that in older versions the `defineRenderer` was
            // invoked before template rendering
            if ((renderingLogic = renderingLogicLegacy)) {
                initRendereringLogic();
            }
        }

        var widgetState;
        var widgetConfig;
        var widgetBody;

        var rerenderInfo = outGlobal.$w;
        var rerenderWidget;

        if (rerenderInfo && (rerenderWidget = rerenderInfo[RERENDER_WIDGET_INDEX])) {
            rerenderInfo[RERENDER_WIDGET_INDEX] = null;

            if (!input) {
                widgetState = rerenderInfo[RERENDER_WIDGET_STATE_INDEX];
                input = null;
            }
        } else if (!input) {
            // Make sure we always have a non-null input object
            input = {};
        }

        var widgetArgs;

        if (input) {
            if (onInput) {
                var lightweightWidget = Object.create(renderingLogic);
                lightweightWidget.onInput(input);
                widgetState = lightweightWidget.state;
                widgetConfig = lightweightWidget;
                delete widgetConfig.state;
            } else {
                // Deprecated legacy methods... this code block should be removed in the future
                if (getWidgetConfig) {
                    // If getWidgetConfig() was implemented then use that to
                    // get the widget config. The widget config will be passed
                    // to the widget constructor. If rendered on the server the
                    // widget config will be serialized to a JSON-like data
                    // structure and stored in a "data-w-config" attribute.
                    widgetConfig = getWidgetConfig(input, out);
                } else {
                    widgetConfig = input.widgetConfig;
                }

                if (getInitialBody) {
                    // If we have widget a widget body then pass it to the template
                    // so that it is available to the widget tag and can be inserted
                    // at the w-body marker
                    widgetBody = getInitialBody(input, out);
                }

                // If we do not have state then we need to go through the process
                // of converting the input to a widget state, or simply normalizing
                // the input using getInitialProps

                if (getInitialProps) {
                    // This optional method is used to normalize input state
                    input = getInitialProps(input, out) || {};
                }

                if (getInitialState) {
                    // This optional method is used to derive the widget state
                    // from the input properties
                    widgetState = getInitialState(input, out);
                }
            }

            if (!widgetBody) {
                // Default to using the nested content as the widget body
                widgetBody = input.renderBody;
            }

            widgetArgs = input.$w;
        }

        var customEvents;
        var scope;

        var id = assignedId;

        if (!widgetArgs) {
            widgetArgs = out.data.$w;
        }

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
        }

        var widgetsContext = WidgetsContext.$__getWidgetsContext(out);

        if (!id) {
            id = widgetsContext.$__nextWidgetId();
        }

        var existingWidget;

        if (rerenderWidget) {
            existingWidget = rerenderWidget;
            id = rerenderWidget.id;
        } else if (rerenderInfo) {
            // Look in in the DOM to see if a widget with the same ID and type already exists.
            existingWidget = widgetLookup[id];
            if (existingWidget && existingWidget.$__type !== typeName) {
                existingWidget = undefined;
            }
        }

        if (existingWidget && !rerenderWidget) {
            // This is a nested widget found during a rerender. We don't want to needlessly
            // rerender the widget if that is not necessary. If the widget is a stateful
            // widget then we update the existing widget with the new state.
            var shouldPreserve;

            if (widgetState) {
                existingWidget.$__replaceState(widgetState);
                shouldPreserve = !widgetBody && !existingWidget.$__isDirty;
            }

            // If the widget is not dirty (no state changes) and shouldUpdate() returns false
            // then skip rerendering the widget.
            if (shouldPreserve || !existingWidget.shouldUpdate(input, widgetState)) {
                preserveWidgetEls(existingWidget, out, widgetsContext);
                return;
            }
        }

        // Use getTemplateData(state, props, out) to get the template
        // data. If that method is not provided then just use the
        // the state (if provided) or the input data.
        var templateData = (getTemplateData ?
            getTemplateData(widgetState, input, out) :
            (getInitialState && widgetState /*legacy*/) || input) || {};

        if (existingWidget) {
            existingWidget.$__emitLifecycleEvent('beforeUpdate');
        }

        var widgetDef = widgetsContext.$__beginWidget(id);
        widgetDef.$__type = typeName;
        widgetDef.$__config = widgetConfig;
        widgetDef.$__state = widgetState;
        widgetDef.$__customEvents = customEvents;
        widgetDef.$__scope = scope;
        widgetDef.$__existingWidget = existingWidget;
        widgetDef.$__roots = roots;
        widgetDef.b = widgetBody;

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(templateData, out, widgetDef, widgetState);

        widgetDef.$__end();
    };
};