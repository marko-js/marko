import type { TestConfig } from "../../main.test";

function reset(document: Document) {
  document
    .querySelector("div.custom")!
    .dispatchEvent(new document.defaultView!.Event("reset", { bubbles: true }));
}

// A `reset` event from an element that is not a form (eg a custom element)
// leaves Controllables alone.
export const config: TestConfig = {
  steps: [{}, reset],
};
