"use strict";
var complain = "MARKO_DEBUG" && require("complain");

class ServerComponent {
  constructor(id, input, out, typeName, customEvents, scope) {
    this.id = id;
    this.___customEvents = customEvents;
    this.___scope = scope;
    this.typeName = typeName;
    this.___bubblingDomEvents = undefined; // Used to keep track of bubbling DOM events for components rendered on the server
    this.___bubblingDomEventsExtraArgsCount = 0;

    this.onCreate(input, out);
    this.___updatedInput = this.onInput(input, out) || input;
    if (this.___input === undefined) {
      this.___input = this.___updatedInput;
    }
    this.onRender(out);
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

  elId(nestedId) {
    var id = this.id;

    if (nestedId == null) {
      return id;
    } else {
      if (typeof nestedId !== "string") {
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
          complain("Using non strings as keys is deprecated.");
        }

        nestedId = String(nestedId);
      }

      if (nestedId.indexOf("#") === 0) {
        id = "#" + id;
        nestedId = nestedId.substring(1);
      }

      return id + "-" + nestedId;
    }
  }

  onCreate() {}
  onInput() {}
  onRender() {}
}

ServerComponent.prototype.getElId = ServerComponent.prototype.elId;

module.exports = ServerComponent;
