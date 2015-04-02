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
        renderer = function renderer(input, out) {
            var global = out.global;
            if (!input) {
                input = {};
            }



            if (!loadedTemplate) {
                loadedTemplate = template.render ? template : marko.load(template);
            }

            var widgetState;
            var widgetArgs = out.data.widgetArgs;
            var widgetBody;

            if (getInitialBody) {
                widgetBody = getInitialBody(input);
            }

            if (getInitialState) {
                // var isBeingExtend = widgetArgs && widgetArgs.extend;
                var isFirstWidget = !global.__firstWidgetFound;

                if (global.__rerenderWidget && global.__rerenderState) {
                    if (!isFirstWidget || extendWidget) {
                        // We are the not first top-level widget or we are being extended
                        // so use the merged rerender state as defaults for the input
                        // and use that to rebuild the new state
                        for (var k in global.__rerenderState) {
                            if (global.__rerenderState.hasOwnProperty(k) && !input.hasOwnProperty(k)) {
                                input[k] = global.__rerenderState[k];
                            }
                        }
                    } else {
                        // We are the first widget and we are not being extended
                        // and we are not extending so use the input as the state
                        widgetState = input;
                        input = null;
                    }
                }
            }

            if (!widgetState) {
                if (getInitialProps) {
                    input = getInitialProps(input, out) || {};
                }

                if (getInitialState) {
                    widgetState = getInitialState(input);
                }
            }

            // The logic below allows stateful widgets that already existing in the DOM to be reused
            // if we are rerendering a UI component.
            //
            // We can only reuse an existing widget if we were given an assigned ID. We can lookup the existing
            // widget using the assigned ID. If an existing widget is found then we temporarily remove it out of
            // the DOM and render a new placeholder with the same ID. After the parent UI component is
            // added to the DOM we then move the existing widget into place by replacing the placeholder
            // element with the old node and then we update the existing widget with its new state (which
            // may or may not have changed).
            if (widgetArgs && global.__rerender === true && !global.__rerenderWidget && !extendWidget) {

                if (widgetState) {
                    mergeExtendState(widgetState, widgetArgs);
                }

                var existingWidget = getExistingWidget(out, widgetArgs);

                if (existingWidget && (existingWidget.constructor === def.constructor) && shouldReuseWidget(existingWidget, widgetState, input)) {
                    // console.log(module.id, 'Reusing existing widget ', existingWidget.id, 'New state: ', widgetState);
                    // Render a placeholder element as a marker that we can use to splice back in the existing
                    // widget that is being reused
                    out.write('<span id="' + existingWidget.id + '"></span>');
                    var widgetsContext = markoWidgets.getWidgetsContext(out);
                    widgetsContext.addReusableWidget(existingWidget, widgetState, input, widgetBody);
                    return;
                }
            }


            global.__firstWidgetFound = true;

            var templateData = getTemplateData ? getTemplateData(widgetState, input) || {} : widgetState || input;

            if (widgetState) {
                templateData.widgetState = widgetState;
            }

            if (widgetBody) {
                templateData.widgetBody = widgetBody;
            }

            if (getWidgetConfig) {
                templateData.widgetConfig = getWidgetConfig(input);
            }

            loadedTemplate.render(templateData, out);
        };
    }

    renderer.render = raptorRenderer.createRenderFunc(renderer);

    return renderer;
};

