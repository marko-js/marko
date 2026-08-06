import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The loop-then-conditional chain dispatches per item and per selection,
// including a same-frame destroy + fill change.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: ["a", "b"], flag: true, suffix: "x" },
    click,
    { items: ["a", "b"], flag: true, suffix: "y" },
    click,
    // The branches are destroyed in the same frame the fill changes.
    { items: ["a", "b"], flag: false, suffix: "z" },
  ],
};
