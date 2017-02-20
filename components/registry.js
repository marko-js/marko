'use strict';

const extend = require('raptor-util/extend');
const SERVER_WIDGET_KEY = Symbol();

function createServerComponentClass(renderingLogic) {
    class ServerComponent {
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

    extend(ServerComponent.prototype, renderingLogic);

    return ServerComponent;
}
function createComponent(renderingLogic, id, input, out, typeName) {
    var ServerComponent = renderingLogic[SERVER_WIDGET_KEY];
    if (!ServerComponent) {
        ServerComponent = renderingLogic[SERVER_WIDGET_KEY] = createServerComponentClass(renderingLogic);
    }

    var component = new ServerComponent(id, input, out, typeName);
    return component;
}

exports.$__isServer = true;
exports.$__createComponent = createComponent;