import type { TestConfig } from "../../main.test";

function type(document: Document) {
  const input = document.querySelector("input.ctrl") as HTMLInputElement;
  input.value = "x";
  input.dispatchEvent(
    new document.defaultView!.Event("input", { bubbles: true }),
  );
}

// An `onInput` handler reads the bound value its Controllable already synced,
// whichever element's `onInput` registered first.
export const config: TestConfig = {
  steps: [{}, type],
};
