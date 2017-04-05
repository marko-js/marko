class ServerComponent {
    constructor(id, input, out, typeName, customEvents, scope) {
        this.id = id;
        this.$__customEvents = customEvents;
        this.$__scope = scope;
        this.$__updatedInput = undefined;
        this.$__input = undefined;
        this.$__state = undefined;
        this.typeName = typeName;
        this.$__bubblingDomEvents = undefined; // Used to keep track of bubbling DOM events for components rendered on the server
        this.$__bubblingDomEventsExtraArgsCount = 0;

        if (this.onCreate !== undefined) {
            this.onCreate(input, out);
        }

        if (this.onInput !== undefined) {
            var updatedInput = this.onInput(input, out) || input;

            if (this.$__input === undefined) {
                this.$__input = updatedInput;
            }

            this.$__updatedInput = updatedInput;
        } else {
            this.$__input = this.$__updatedInput = input;
        }

        if (this.onRender !== undefined) {
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

module.exports = ServerComponent;
