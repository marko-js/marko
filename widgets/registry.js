var extend = require('raptor-util/extend');

function createServerWidgetClass(renderingLogic) {
    class ServerWidget {
        constructor(input, out, typeName) {
            this.$__updatedInput = undefined;
            this.$__input = undefined;
            this.$__state = undefined;
            this.typeName = typeName;

            if (this.onCreate) {
                this.onCreate();
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
function createWidget(renderingLogic, input, out, typeName) {

    var ServerWidget = renderingLogic.ServerWidget;
    if (!ServerWidget) {
        ServerWidget = renderingLogic.ServerWidget = createServerWidgetClass(renderingLogic);
    }

    var widget = new ServerWidget(input, out, typeName);
    var updatedInput;

    updatedInput = updatedInput || input;

    if (widget.$__input === undefined) {
        widget.$__input = updatedInput;
    }

    widget.$__updatedInput = updatedInput;

    return widget;
}

exports.$__isServer = true;
exports.$__createWidget = createWidget;