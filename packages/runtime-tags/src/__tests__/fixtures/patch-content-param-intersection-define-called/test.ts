import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` called directly with client state and kept by a dynamic tag with
// server input: the tag's entry decides by the owner's groups alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a1", x: "x1" },
    { a: "a2", x: "x2" },
    inc,
    { a: "a3", x: "x3" },
  ],
};
