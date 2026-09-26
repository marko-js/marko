import type { TestConfig } from "../../main.test";
import { flushRAF } from "../../utils/resolve";

function show(document: Document) {
  (document.querySelector("button.show") as HTMLButtonElement).click();
}
function type(document: Document) {
  const input = document.querySelector("input")!;
  input.value = "typed";
  input.dispatchEvent(
    new document.defaultView!.Event("input", { bubbles: true }),
  );
}
function reset(document: Document) {
  (document.querySelector("button.reset") as HTMLButtonElement).click();
}

// A Controllable detached at setup (client-rendered hidden `<show>`) still
// reports the reset of the form it joins later.
export const config: TestConfig = {
  steps: [{}, show, type, reset, flushRAF],
};
