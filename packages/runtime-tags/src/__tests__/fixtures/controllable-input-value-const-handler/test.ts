import type { TestConfig } from "../../main.test";

// A controllable input serializes a handler read through a `<const>`, so
// that function registers.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => {
      const input = document.querySelector("input")!;
      const window = input.ownerDocument.defaultView!;
      input.value = "b";
      input.dispatchEvent(new window.Event("input", { bubbles: true }));
    },
  ],
};
