import type { TestConfig } from "../../main.test";

// A child's controllable input serializes the handler a parent passes it,
// so the parent registers that function.
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
