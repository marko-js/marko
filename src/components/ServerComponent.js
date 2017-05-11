'use strict';

class ServerComponent {
    constructor(id, input, out, typeName, customEvents, scope) {
        this.id = id;
        this.___customEvents = customEvents;
        this.___scope = scope;
        this.___updatedInput = undefined;
        this.___input = undefined;
        this.___state = undefined;
        this.typeName = typeName;
        this.___bubblingDomEvents = undefined; // Used to keep track of bubbling DOM events for components rendered on the server
        this.___bubblingDomEventsExtraArgsCount = 0;

        if (this.onCreate !== undefined) {
            this.onCreate(input, out);
        }

        if (this.onInput !== undefined) {
            var updatedInput = this.onInput(input, out) || input;

            if (this.___input === undefined) {
                this.___input = updatedInput;
            }

            this.___updatedInput = updatedInput;
        } else {
            this.___input = this.___updatedInput = input;
        }

        if (this.onRender !== undefined) {
            this.onRender(out);
        }
    }

    set input(newInput) {
        this.___input = newInput;
    }

    get input() {
        return this.___input;
    }

    set state(newState) {
        this.___state = newState;
    }

    get state() {
        return this.___state;
    }

    get ___rawState() {
        return this.___state;
    }
}

module.exports = ServerComponent;
