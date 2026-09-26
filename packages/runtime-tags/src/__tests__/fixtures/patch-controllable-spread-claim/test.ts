import type { TestConfig } from "../../main.test";

const read = (document: Document) => {
  document.getElementById("out")!.textContent = String(
    document.querySelector("input")!.checked,
  );
};

// A spread merges a partial controllable (`checked` without a handler), so
// the attribute set re-claims the element's controllable at run time.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, attrs: { title: "a" } },
    read,
    { on: true, attrs: { title: "b" } },
    read,
  ],
};
