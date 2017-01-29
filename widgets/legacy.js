var modern = require('./index');

// legacy api
exports.defineComponent = require('./defineComponent');
exports.defineWidget = require('./defineWidget');
exports.defineRenderer = require('./defineRenderer');
exports.makeRenderable = exports.renderable = require('../runtime/renderable');

// referenced by compiled templates
exports.w = modern.w;
exports.rw = modern.rw;
exports.r = rendererLegacy;

// server only
exports.writeInitWidgetsCode = modern.writeInitWidgetsCode;
exports.getRenderedWidgets = modern.getRenderedWidgets;

// browser only
exports.onInitWidget = modern.onInitWidget;
exports.Widget = modern.Widget;
exports.getWidgetForEl = modern.getWidgetForEl;
exports.initWidgets = modern.initWidgets;

// legacy renderer
var widgetLookup = require('./util').$__widgetLookup;
var WidgetsContext = require('./WidgetsContext');
var modernRenderer = require('./renderer');
var resolveWidgetRef = modernRenderer.$__resolveWidgetRef;
var preserveWidgetEls = modernRenderer.$__preserveWidgetEls;
var handleBeginAsync = modernRenderer.$__handleBeginAsync;
var WIDGETS_BEGIN_ASYNC_ADDED_KEY = '$wa';

function rendererLegacy(renderFunc, widgetProps) {
    var typeName = widgetProps.type;
    var roots = widgetProps.roots;
    var assignedId = widgetProps.id;

    return function renderer(input, out, renderingLogic) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on('beginAsync', handleBeginAsync);
        }

        // Render the template associated with the component using the final template
        // data that we constructed
        var widgetConfig;
        var widgetBody;
        var widgetState; // This is the pending widget state that needs to be assigned to the new widget
        var finalWidgetState; // This is the final widget state
        var getInitialProps;
        var getTemplateData;
        var getInitialState;
        var getWidgetConfig;
        var getInitialBody;

        if (renderingLogic) {
            getInitialProps = renderingLogic.getInitialProps;
            getTemplateData = renderingLogic.getTemplateData;
            getInitialState = renderingLogic.getInitialState;
            getWidgetConfig = renderingLogic.getWidgetConfig;
            getInitialBody = renderingLogic.getInitialBody;
        }

        var rootRerenderWidget = outGlobal.$w;
        var isRerender = rootRerenderWidget !== undefined;

        if (rootRerenderWidget) {
            outGlobal.$w = null;
        } else if (!input) {
            // Make sure we always have a non-null input object
            input = {};
        }

        var widgetArgs = input && input.$w;
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
            delete input.$w;
        }

        var widgetsContext = WidgetsContext.$__getWidgetsContext(out);

        if (!id) {
            id = widgetsContext.$__nextWidgetId();
        }

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
                widgetState = finalWidgetState = getInitialState(input, out);
            }

            if (!widgetBody) {
                // Default to using the nested content as the widget body
                widgetBody = input.renderBody;
            }
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
                var shouldPreserve;

                if (existingState) {
                    if (widgetState) {
                        // This will only be true if getInitialState was true
                        existingWidget.$__replaceState(widgetState);
                        widgetState = null;
                    }

                    shouldPreserve = !widgetBody && !existingWidget.$__isDirty;
                }

                // If the widget is not dirty (no state changes) and shouldUpdate() returns false
                // then skip rerendering the widget.
                if (shouldPreserve || !existingWidget.shouldUpdate(input, finalWidgetState)) {
                    preserveWidgetEls(existingWidget, out, widgetsContext);
                    return;
                }
            }
        }

        // Use getTemplateData(state, props, out) to get the template
        // data. If that method is not provided then just use the
        // the state (if provided) or the input data.
        var templateInput = getTemplateData ?
            getTemplateData(finalWidgetState, input, out /*legacy*/) :
            (getInitialState && finalWidgetState /*legacy*/) ||
            input || {};

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
        renderFunc(templateInput, out, widgetDef, finalWidgetState);

        widgetDef.$__end();
    };
}