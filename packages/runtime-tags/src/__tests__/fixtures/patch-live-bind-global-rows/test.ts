import type { TestConfig } from "../../main.test";

// A patch creates a loop row (over server data) whose child binds a live
// function (`clamp`, capturing the caller-param `max`) as its input's value
// change: the server sends a `LiveBind` entry that no template links
// (marko-idle /craft -> /bank, `number-stepper`).
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { rows: [] } },
    { $global: { rows: [{ id: 1, qty: 3 }] } },
    type,
  ],
};

function type(document: Document) {
  const input = document.querySelector("input")!;
  input.value = "9";
  input.dispatchEvent(
    new document.defaultView!.Event("input", { bubbles: true }),
  );
}
