import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The `<define>` a child's `<let>` holds shows a branch by a server value: the client's
// copy creates and removes it as a patch writes the value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    { label: "c", show: false },
    { label: "d", show: true },
    clear,
    { label: "e", show: false },
  ],
};
