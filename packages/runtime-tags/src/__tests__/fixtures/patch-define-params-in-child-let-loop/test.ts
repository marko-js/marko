import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Loop rows each hold the `<define>` in a child's `<let>`, rendered with the row's
// param: a patch adds and removes rows around the held copies.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", items: [1, 2] },
    { label: "b", items: [1, 2, 3] },
    clear,
    { label: "c", items: [2, 3] },
  ],
};
