var marko = require('marko');
var raptorRenderer = require('raptor-renderer');
var extend = require('raptor-util/extend');
var markoWidgets = require('../');

function shouldReuseWidget(existingWidget, widgetProps, widgetState) {
    if (existingWidget.shouldReuseWidget === true) {
        return true;
    }

    if (typeof existingWidget.shouldReuseWidget === 'function') {
        return existingWidget.shouldReuseWidget(widgetState, widgetProps);
    }

    return false;
}

function getExistingWidget(out, widgetArgs) {
    var id = widgetArgs.id;
    if (id) {
        var existingEl = document.getElementById(id);
        if (existingEl) {
            return existingEl.__widget;
        }
    }

    return null;
}

function mergeExtendState(widgetState, widgetArgs) {
    var extendState = widgetArgs.extendState;

    if (extendState) {
        delete widgetArgs.extendState;

        if (widgetState) {
            return extend(widgetState, extendState);
        } else {
            return extendState;
        }
    }
}

module.exports = function defineRenderer(def) {
    var template = def.template;
    var getInitialProps = def.getInitialProps;
    var getTemplateData = def.getTemplateData;
    var getInitialState = def.getInitialState;
    var getWidgetConfig = def.getWidgetConfig;
    var getInitialBody = def.getInitialBody;
    var extendWidget = def.extendWidget;
    var renderer = def.renderer;

    var loadedTemplate;


    if (!renderer) {
        // Create a renderer function that takes care of translating
        // the input properties to a view state. Also, this renderer
        // takes care of re-using existing widgets.
        renderer = function renderer(input, out) {
            var global = out.global;

            var newProps = input;

            if (!newProps) {
                // Make sure we always have a non-null input object
                newProps = {};
            }

            if (!loadedTemplate) {
                // Lazily load the template on first render to avoid potential problems
                // with circular dependencies
                loadedTemplate = template.render ? template : marko.load(template);
            }

            var widgetState;
            var widgetArgs = out.data.widgetArgs;

            if (getInitialState) {
                // This is a state-ful widget. If this is a rerender then the "input"
                // will be the new state. If we have state then we should use the input
                // as the widget state and skip the steps of converting the input
                // to a widget state.

                if (global.__rerenderWidget && global.__rerenderState) {
                    var isFirstWidget = !global.__firstWidgetFound;

                    if (!isFirstWidget || extendWidget) {
                        // We are the not first top-level widget or we are being extended
                        // so use the merged rerender state as defaults for the input
                        // and use that to rebuild the new state. This is kind of a hack
                        // but extending widgets requires this hack since there is no
                        // single state since the widget state is split between the
                        // widget being extended and the widget doing the extending.
                        for (var k in global.__rerenderState) {
                            if (global.__rerenderState.hasOwnProperty(k) && !input.hasOwnProperty(k)) {
                                newProps[k] = global.__rerenderState[k];
                            }
                        }
                    } else {
                        // We are the first widget and we are not being extended
                        // and we are not extending so use the input as the state
                        widgetState = input;
                        newProps = null;
                    }
                }
            }

            var widgetIsReuse = global.__widgetIsReuse;
            delete global.__widgetIsReuse;


            if (!widgetState) {
                // If we do not have state then we need to go through the process
                // of converting the input to a widget state, or simply normalizing
                // the input using getInitialProps

                if (getInitialProps && !widgetIsReuse) {
                    // This optional method is used to normalize input state
                    newProps = getInitialProps(newProps) || {};
                }

                if (getInitialState) {
                    // This optional method is used to derive the widget state
                    // from the input properties
                    widgetState = getInitialState(newProps);
                }
            }

            // The logic below allows widgets that already exist in the DOM to be reused
            // if we are rerendering a UI component. In order to re-use a widget we have
            // have to have a stable ID that is consistent across re-rendering.
            //
            // We can only reuse an existing widget if we were given an assigned ID. We can lookup the existing
            // widget using the assigned ID. If an existing widget is found then we temporarily remove it out of
            // the DOM and render a new placeholder with the same ID. After the parent UI component is
            // added to the DOM we then move the existing widget into place by replacing the placeholder
            // element with the old node and then we update the existing widget with its new state (which
            // may or may not have changed). Once the new widget is in place it will update its view
            // if needed, but the same widget instance will always be used.
            if (widgetArgs && global.__rerender === true && !global.__rerenderWidget && !extendWidget) {

                if (widgetState) {
                    // If this widget is being extended then merge the state together
                    mergeExtendState(widgetState, widgetArgs);
                }

                var existingWidget = getExistingWidget(out, widgetArgs);

                if (existingWidget &&
                    (existingWidget.constructor === def.constructor) &&
                    shouldReuseWidget(existingWidget, widgetState, newProps)) {

                    // Render a placeholder element as a marker that we can use to splice back in the existing
                    // widget that is being reused
                    out.write('<span id="' + existingWidget.id + '"></span>');
                    var widgetsContext = markoWidgets.getWidgetsContext(out);
                    widgetsContext.addReusableWidget(existingWidget, widgetState, newProps);
                    return;

                }
            }

            global.__firstWidgetFound = true;

            var templateData = getTemplateData ? getTemplateData(widgetState, newProps) || {} : widgetState || newProps;

            if (widgetState) {
                templateData.widgetState = widgetState;
            }

            if (newProps) {
                if (getInitialBody) {
                    templateData.widgetBody = getInitialBody(newProps);
                } else {
                    templateData.widgetBody = newProps.renderBody;
                }

                if (getWidgetConfig) {
                    templateData.widgetConfig = getWidgetConfig(newProps);
                }
            }


            loadedTemplate.render(templateData, out);
        };
    }

    renderer.render = raptorRenderer.createRenderFunc(renderer);

    return renderer;
};

