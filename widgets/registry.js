'use strict';

const extend = require('raptor-util/extend');
const SERVER_WIDGET_KEY = Symbol();

function createServerWidgetClass(renderingLogic) {
    class ServerWidget {
        constructor(id, input, out, typeName) {
            this.id = id;
            this.$__updatedInput = undefined;
            this.$__input = undefined;
            this.$__state = undefined;
            this.typeName = typeName;

            if (this.onCreate) {
                this.onCreate(input, out);
            }
            if (this.onInput) {
                var updatedInput = this.onInput(input, out) || input;

                if (this.$__input === undefined) {
                    this.$__input = updatedInput;
                }

                this.$__updatedInput = updatedInput;
            } else {
                this.$__input = this.$__updatedInput = input;
            }

            if (this.onRender) {
                this.onRender(out);
            }
        }

        set input(newInput) {
            this.$__input = newInput;
        }

        get input() {
            return this.$__input;
        }

        set state(newState) {
            this.$__state = newState;
        }

        get state() {
            return this.$__state;
        }

        get $__rawState() {
            return this.$__state;
        }
    }

    extend(ServerWidget.prototype, renderingLogic);

    return ServerWidget;
}
function createWidget(renderingLogic, id, input, out, typeName) {
    var ServerWidget = renderingLogic[SERVER_WIDGET_KEY];
    if (!ServerWidget) {
        ServerWidget = renderingLogic[SERVER_WIDGET_KEY] = createServerWidgetClass(renderingLogic);
    }

    var widget = new ServerWidget(id, input, out, typeName);
    return widget;
}

exports.$__isServer = true;
exports.$__createWidget = createWidget;