import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Rows a patch creates read a param its caller passes client state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [] },
    { items: ["a"] },
    click,
    { items: ["a", "b"] },
    click,
    { items: ["c"] },
  ],
};
