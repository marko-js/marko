import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` looping over a param one call site feeds from state and
// another from input: rows the client adds read the root param fresh.
export const config: TestConfig = {
  patches: true,
  steps: [
    { suffix: "1", items: ["x"] },
    { suffix: "2", items: ["x", "y"] },
    click,
    { suffix: "3", items: ["y"] },
    click,
    { suffix: "4", items: ["y"] },
  ],
};
