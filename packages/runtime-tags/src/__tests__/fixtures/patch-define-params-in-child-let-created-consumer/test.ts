import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A patch creates the child holding the `<define>` in its `<let>`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    { label: "c", show: true },
    clear,
    { label: "d", show: true },
  ],
};
