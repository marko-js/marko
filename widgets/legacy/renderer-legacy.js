var widgetLookup = require('../util').$__widgetLookup;
var WidgetsContext = require('../WidgetsContext');
var registry = require('../registry');
var modernRenderer = require('../renderer');
var resolveWidgetRef = modernRenderer.$__resolveWidgetRef;
var preserveWidgetEls = modernRenderer.$__preserveWidgetEls;
var handleBeginAsync = modernRenderer.$__handleBeginAsync;

var WIDGETS_BEGIN_ASYNC_ADDED_KEY = '$wa';

function createRendererFunc(templateRenderFunc, widgetProps) {
    var typeName = widgetProps.type;
    var roots = widgetProps.roots;
    var assignedId = widgetProps.id;

    return function renderer(input, out, renderingLogic) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on('beginAsync', handleBeginAsync);
        }

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

        var widgetConfig;
        var widgetBody;
        var widgetState;

        var widget = outGlobal.$w;
        var fakeWidget;
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

        if (registry.$__isServer && typeName) {
            widget = { id:id, typeName:typeName };
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
                    if (typeName) {
                        widget = registry.$__createWidget(typeName, id);
                    }
                }
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

            if (widgetConfig) {
                widget.$c = widgetConfig;
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
                widget.state = widgetState = getInitialState(input, out);
            }

            if (!widgetBody) {
                // Default to using the nested content as the widget body
                widgetBody = input.renderBody;
            }
        }

        if (widget && isExisting) {
            if (!widget.$__isDirty || !widget.shouldUpdate(input, widget.$__state)) {
                preserveWidgetEls(widget, out, widgetsContext);
                return;
            }
        }

        if (!widget) {
            fakeWidget = {};
        } else {
            widgetState = widget.$__rawState;
        }

        var templateInput = getTemplateData ?
            getTemplateData(widgetState, input, out) :
            widgetState || input || {};

        var widgetDef = widgetsContext.$__beginWidget(widget || fakeWidget);
        widgetDef.$__customEvents = customEvents;
        widgetDef.$__scope = scope;
        widgetDef.$__roots = roots;
        widgetDef.$__widget = fakeWidget ? null : widget;
        widgetDef.$__isExisting = isExisting;
        widgetDef.b = widgetBody;
        widgetDef.c = function(widgetConfig) {
            widget.$c = widgetConfig;
        };
        widgetDef.t = function(typeName) {
            if (typeName) {
                this.$__widget = widget = registry.$__createWidget(typeName, fakeWidget.id);
            }
        };

        if (widget && isExisting) {
            widget.$__emitLifecycleEvent('$__legacyRender');
        }

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(templateInput, out, widgetDef);

        widgetDef.$__end();
    };
}

module.exports = createRendererFunc;
