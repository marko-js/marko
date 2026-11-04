import type { TestConfig } from "../../main.test";

// patch-live-bind-global-rows without patches: the same row from a document
// load, then an input that `clamp` limits.
export const config: TestConfig = {
  steps: [{ $global: { rows: [{ id: 1, qty: 3 }] } }, type],
};

function type(document: Document) {
  const input = document.querySelector("input")!;
  input.value = "9";
  input.dispatchEvent(
    new document.defaultView!.Event("input", { bubbles: true }),
  );
}
